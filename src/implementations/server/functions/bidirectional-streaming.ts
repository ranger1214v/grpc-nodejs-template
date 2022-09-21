import { ServerWritableStream } from "grpc";
import { Item } from '../../../protos/action';
import { messageItem$ } from '../../../cache/list';
import { Empty } from "../../../../google/protobuf/empty";


export const BidirectionalStreamingAsyncList = async (call: ServerWritableStream<Empty>) => {
    call.on('data', (data: Item) => {
        console.log('Server: BidirectionalStreamingAsyncList =>', data)
        messageItem$.next(data);
        main();
    });

    call.on('end', () => {
        console.log('Server: BidirectionalStreamingAsyncList => 連線結束');
    });

    async function main() {
        messageItem$.subscribe(item => call.write({ items: [item] }));
    }
}