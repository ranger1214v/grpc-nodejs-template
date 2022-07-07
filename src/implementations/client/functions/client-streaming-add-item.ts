import { Item } from "../../../protos/action";
import * as prompts from 'prompts';

export const ClientStreamingAddItem = async (client: any) => {
    // console.log('Client: ClientStreamingAddItem start');
    console.log('歡迎來到 Ranger 的聊天室');

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

        const item: Item = { name: responseName.value, price: 0, message: responseText.value };
        clientCall.write(item);
    }

    clientCall.end();
}
