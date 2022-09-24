import { ToDoServiceClient } from "../../protos/action";

export const serverStreamingSubList = async (client: ToDoServiceClient<{}>) => {
    for await (const request of client.serverStreamingSubList({})) {
        console.log('ServerStreamingSubList', request);
    }
}