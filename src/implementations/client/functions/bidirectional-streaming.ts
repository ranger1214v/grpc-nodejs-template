import { Item } from '../../../protos/action';
import { sleep } from './../../../shared/sleep';


export const BidirectionalStreamingAsyncList = async (client: any) => {
    console.log('Client: BidirectionalStreamingAsyncList start');
    const bidirectionalCall = client.BidirectionalStreamingAsyncList({ name: '', price: 0 }).on('data', (data: any) => {
        console.log('Client: BidirectionalStreamingAsyncList => ', data);
    });

    const bList: Item[] = [
        { name: 'clientFoo01', price: 101, message: 'test'  },
        { name: 'clientFoo02', price: 201, message: 'test'  },
        { name: 'clientFoo03', price: 301, message: 'test'  },
        { name: 'clientFoo04', price: 401, message: 'test'  },
        { name: 'clientFoo05', price: 501, message: 'test'  },
    ];
    for (const item of bList) {
        await sleep(1000);
        bidirectionalCall.write(item);
    }
    bidirectionalCall.end();
}