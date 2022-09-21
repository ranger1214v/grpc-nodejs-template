export const ServerStreamingSubList = async (client: any) => {
    console.log('Client: ServerStreamingSubList start');
    client.ServerStreamingSubList({}).on('data', (data: any) => {
        console.log('Client: ServerStreamingSubList => ', data);
    });
}