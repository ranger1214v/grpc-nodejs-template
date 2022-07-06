import { ServerWritableStream } from "grpc";
import { messageItem$ } from "../../../cache/list";
import { Item } from "../../../protos/action";

export const ClientStreamingAddItem = async (call: ServerWritableStream<Item>, callback: any) => {
    call.on('data', (data: Item) => {
        console.log('ClientStreamingAddItem =>', data);
        messageItem$.next(data);
    })

    call.on('end', () => {
        console.log('ClientStreamingAddItem => 連線結束');
        callback(null, {});
    })
}
