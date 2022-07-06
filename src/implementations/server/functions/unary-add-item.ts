import { ServerWritableStream } from 'grpc';
import { messageItem$ } from '../../../cache/list';
import { Item } from '../../../protos/action';

export const UnaryAddItem = (call: ServerWritableStream<Item>, callback: any) => {
    console.log('UnaryAddItem call.request => ', call.request);
    const data = call.request || {
        name: 'no name',
        price: 0,
    };

    messageItem$.next(data);

    callback(null, {
        items: [],
    });
}