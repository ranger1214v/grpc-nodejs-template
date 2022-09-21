import { Item } from "../../../protos/action";
import * as prompts from 'prompts';

export const ClientStreamingAddItem = async (client: any) => {
    const clientCall = client.ClientStreamingAddItem((error: any, response: any) => console.log({ error, response }));
    const responseName = await prompts({
        type: 'text',
        name: 'value',
        message: 'Your Name : ',
    });
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
        clientCall.write(item);
    }

    clientCall.end();
}
