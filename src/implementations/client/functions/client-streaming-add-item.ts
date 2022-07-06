import { Item } from "../../../protos/action";
import { sleep } from "../../../shared/sleep";

export const ClientStreamingAddItem = async (client: any) => {
    console.log('Client: ClientStreamingAddItem start');
    const clientCall = client.ClientStreamingAddItem((error: any, response: any) => console.log({ error, response }));
    const cList: Item[] = [
        { name: 'clientFoo01', price: 101, message: 'test 101' },
        { name: 'clientFoo02', price: 201, message: 'test 201' },
        { name: 'clientFoo03', price: 301, message: 'test 301' },
        { name: 'clientFoo04', price: 401, message: 'test 401' },
        { name: 'clientFoo05', price: 501, message: 'test 501' },
    ];
    for (const item of cList) {
        await sleep(1000);
        clientCall.write(item);
    }
    clientCall.end();
}
