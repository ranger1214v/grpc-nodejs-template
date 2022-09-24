process.env.UV_THREADPOOL_SIZE = '8';

import * as path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import * as toDoServiceImplementations from './implementations/server/todoService';
import { environment } from './environments/environment';
import { protobufPackage } from './protos/action';

async function main() {

    const server = new grpc.Server();

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
    const actionProto: any = grpc.loadPackageDefinition(packageDefinition)[protobufPackage];

    server.addService(actionProto.ToDoService.service, toDoServiceImplementations);

    server.bind(`0.0.0.0:${environment.serverPort}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

main();