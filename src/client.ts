import * as path from 'path';
import * as protoLoader from '@grpc/proto-loader';
import * as grpcjs from '@grpc/grpc-js';
import * as parseArgs from 'minimist';
import { ClientStreamingAddItem } from './implementations/client/functions/client-streaming-add-item';
import { ServerStreamingSubList } from './implementations/client/functions/server-streaming-sub-list';
import { BidirectionalStreamingAsyncList } from './implementations/client/functions/bidirectional-streaming';
import { UnaryAddItem } from './implementations/client/functions/unary-add-item';
import { ClientStreamingCalculate } from './implementations/client/functions/client-streaming-calculate';

async function main() {

    const argv = parseArgs(process.argv, {
        string: 'db_path'
    });

    // console.log('argv!! => ', argv);

    const PROTO_PATH = path.join(__dirname, './protos/action.proto');
    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
    const toDoProto: any = grpcjs.loadPackageDefinition(packageDefinition).AiiiGRPC;

    const client = new toDoProto.ToDoService(argv.host || `0.0.0.0`, grpcjs.credentials
    .createSsl());

    switch (argv.action) {
        case 'ClientStreamingAddItem':
            await ClientStreamingAddItem(client);
            break;

        case 'ClientStreamingCalculate':
            await ClientStreamingCalculate(client);
            break;

        case 'ServerStreamingSubList':
            await ServerStreamingSubList(client);
            break;

        case 'BidirectionalStreamingAsyncList':
            await BidirectionalStreamingAsyncList(client);
            break;

        case 'UnaryAddItem':
        default:
            await UnaryAddItem(client, argv);
    }

}

main();
