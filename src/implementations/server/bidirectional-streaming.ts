import { CallContext } from "nice-grpc-common";
import { from } from 'ix/asynciterable';
import { withAbort } from 'ix/asynciterable/operators';
import { DeepPartial, Item } from '../../protos/action';
import { messageItem$} from '../../cache/list';

export async function* bidirectionalStreamingAsyncList(
    request: AsyncIterable<Item>,
    context: CallContext,
): AsyncIterable<DeepPartial<Item>> {
    console.log('BidirectionalStreamingAsyncList => ', request);
    context.signal.addEventListener('abort', (abort) => console.log('BidirectionalStreamingAsyncList abort!!', abort));

    (async () => {
        console.log('BidirectionalStreamingAsyncList => start for await!!');
        for await (const item of request) {
            messageItem$.next(item);
        }
    })(),

    yield* from(messageItem$).pipe(withAbort(context.signal)),
    
    console.log('BidirectionalStreamingAsyncList => end!!');
}
