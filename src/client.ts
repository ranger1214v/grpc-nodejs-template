import { createChannel, createClient } from 'nice-grpc';
import * as parseArgs from 'minimist';
import {
    ToDoServiceClient,
    ToDoServiceDefinition,
} from './protos/action';
import { environment } from './environments/environment';
import { unaryAddItem } from './implementations/client/unary-add-item';
import { healthCheck } from './implementations/client/health-check';
import { clientStreamingAddItem } from './implementations/client/client-streaming-add-item';
import { serverStreamingSubList } from './implementations/client/server-streaming-sub-list';
import { bidirectionalStreamingAsyncList } from './implementations/client/bidirectional-streaming';

const channel = createChannel(`${environment.serverHost}:${environment.serverPort}`);

const client: ToDoServiceClient = createClient(
    ToDoServiceDefinition,
    channel,
);

const main = async () => {

    const argv = parseArgs(process.argv, {
        string: 'db_path'
    });

    switch (argv.action) {
        case 'ClientStreamingAddItem':
            clientStreamingAddItem(client);
            break;

        case 'ServerStreamingSubList':
            serverStreamingSubList(client);
            break;

        case 'BidirectionalStreamingAsyncList':
            bidirectionalStreamingAsyncList(client);
            break;

        case 'UnaryAddItem':
            unaryAddItem(client, argv);
            break;

        case 'HealthCheck':
        default:
            healthCheck(client);

    }

};

main();