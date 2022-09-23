import { ServerWritableStream } from "grpc";
import { Item } from '../../../protos/action';
import { messageItem$, messageList$ } from '../../../cache/list';
import { Empty } from "../../../../google/protobuf/empty";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

let list: Item[] = [];

messageList$.subscribe((items) => list = items);

export const BidirectionalStreamingAsyncList = async (call: ServerWritableStream<Empty>) => {

    call.on('data', (data: Item) => {
        console.log('Server: BidirectionalStreamingAsyncList =>', data);
        messageItem$.next(data);
    });

    call.on('end', () => {
        console.log('Server: BidirectionalStreamingAsyncList => end!!');
    });

    const destroy$ = new Subject();
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
        console.log('erver: BidirectionalStreamingAsyncList => close!!');
        destroy$.next();
        destroy$.complete();
    });
}