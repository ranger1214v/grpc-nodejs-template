import { ServerWritableStream } from "grpc";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Empty } from "../../../../google/protobuf/empty";
import { messageItem$, messageList$ } from "../../../cache/list";
import { Item } from "../../../protos/action";

let list: Item[] = [];

messageList$.subscribe((items) => list = items);

export const ServerStreamingSubList = async (call: ServerWritableStream<Empty>) => {

    const destroy$ = new Subject();

    console.log('Server: serverStreamingSubList =>', call.request);

    for (const item of list) {
        call.write(item);
    }

    messageItem$.pipe(
        takeUntil(destroy$),
    ).subscribe(item => {
        console.log('item!! =>', item);
        call.write(item);
    });


    call.on('close', () => { // 連線關閉時 取消訂閱
        console.log('close!!');
        destroy$.next();
        destroy$.complete();
    });

}