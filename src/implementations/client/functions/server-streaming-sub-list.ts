export const ServerStreamingSubList = async (client: any) => {
    console.log('Client: ServerStreamingSubList start');
    client.ServerStreamingSubList({ name: '', price: 0, opStr: '' }).on('data', (data: any) => {
        console.log('Client: ServerStreamingSubList => ', data);
    });
}