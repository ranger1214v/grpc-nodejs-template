import { ServerWritableStream } from 'grpc';
import { messageItem$ } from '../../../cache/list';
import { Item } from '../../../protos/action';

export const UnaryAddItem = (call: ServerWritableStream<Item>, callback: any) => {
    console.log('Server: UnaryAddItem call.request => ', call.request);
    const data = call.request || {
        name: 'no name',
        message: 'hello world',
    };

    messageItem$.next(data);

    callback(null, {
        items: [],
    });
}