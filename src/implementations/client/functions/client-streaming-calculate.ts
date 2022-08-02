import { Calculate } from "../../../protos/action";
import * as prompts from 'prompts';

export const ClientStreamingCalculate = async (client: any) => {
    console.log('Client: ClientStreamingCalculate start');

    const clientCall = client.ClientStreamingCalculate((error: any, response: any) => console.log({ error, response }));
    console.log('Client: ClientStreamingCalculate step00');

    const response01 = await prompts({
        type: 'text',
        name: 'value',
        message: '數字',
    });
    const calculate01: Calculate = { data: response01.value };
    clientCall.write(calculate01);

    const response02 = await prompts({
        type: 'text',
        name: 'value',
        message: '運算符',
    });
    const calculate02: Calculate = { data: response02.value };
    clientCall.write(calculate02);

    const response03 = await prompts({
        type: 'text',
        name: 'value',
        message: '數字',
    });
    const calculate03: Calculate = { data: response03.value };
    clientCall.write(calculate03);

    clientCall.on('data', (data: any) => { console.log(data) })
    
  //  clientCall.end();
}
