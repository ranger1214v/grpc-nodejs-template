import * as prompts from 'prompts';
import { DeepPartial, Item, ToDoServiceClient } from '../../protos/action';

export const bidirectionalStreamingAsyncList = async (client: ToDoServiceClient<{}>) => {
    console.log('Client: BidirectionalStreamingAsyncList start');

    const responseName = await prompts({
        type: 'text',
        name: 'value',
        message: 'Your Name : ',
    });
    async function* createRequest(): AsyncIterable<DeepPartial<Item>> {
        while (true) {
            const responseText = await prompts({
                type: 'text',
                name: 'value',
                message: 'You Say : ',
            });
            if (responseText.value === 'exit') {
                break;
            }
            const item: Item = { name: responseName.value, message: responseText.value };
            yield item;
        }
    }
    for await (const request of client.bidirectionalStreamingAsyncList(createRequest())) {
        console.log('Client: BidirectionalStreamingAsyncList', request);
    }
}