import { Item } from '../../../protos/action';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const BidirectionalStreamingAsyncList = async (client: any) => {
    console.log('Client: BidirectionalStreamingAsyncList start');
    const bidirectionalCall = client.BidirectionalStreamingAsyncList({ name: 'Tester', message: 'Hello World' }).on('data', (data: any) => {
        console.log('Client: BidirectionalStreamingAsyncList => ', data);
    });

    const bList: Item[] = [
        { name: 'clientFoo01', message: 'test'  },
        { name: 'clientFoo02', message: 'test'  },
        { name: 'clientFoo03', message: 'test'  },
        { name: 'clientFoo04', message: 'test'  },
        { name: 'clientFoo05', message: 'test'  },
    ];
    for (const item of bList) {
        await sleep(1000);
        bidirectionalCall.write(item);
    }
    bidirectionalCall.end();
}