import { ServerWritableStream } from "grpc";
import { Filter, Item } from '../../../protos/action';
import { messageItem$ } from '../../../cache/list';


export const BidirectionalStreamingAsyncList = async (call: ServerWritableStream<Filter>) => {
    call.on('data', (data: Item) => {
        console.log('BidirectionalStreamingAsyncList =>', data)
        messageItem$.next(data);
        main();
    });

    call.on('end', () => {
        console.log('BidirectionalStreamingAsyncList => 連線結束');
    });

    async function main() {
        messageItem$.subscribe(item => call.write({ items: [item] }));
    }
}