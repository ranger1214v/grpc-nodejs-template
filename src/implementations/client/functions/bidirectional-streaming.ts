import * as prompts from 'prompts';
import { Item } from '../../../protos/action';

export const BidirectionalStreamingAsyncList = async (client: any) => {
    console.log('Client: BidirectionalStreamingAsyncList start');
    const bidirectionalCall = client.BidirectionalStreamingAsyncList().on('data', (data: any) => {
        console.log('Client: BidirectionalStreamingAsyncList => ', data);
    });

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
        bidirectionalCall.write(item);
    }

    bidirectionalCall.end();
}