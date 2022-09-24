import { DeepPartial, Item, ToDoServiceClient } from "../../protos/action";
import * as prompts from 'prompts';

export const clientStreamingAddItem = async (client: ToDoServiceClient<{}>) => {

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
    return client.clientStreamingAddItem(createRequest())
        .then(result => console.log('ClientStreamingAddItem =>', result));
}
