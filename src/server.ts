process.env.UV_THREADPOOL_SIZE = '8';
import { createServer } from 'nice-grpc';
import { environment } from './environments/environment';

import {
    ToDoServiceServiceImplementation,
    ToDoServiceDefinition,
} from './protos/action';
import { healthCheck } from './implementations/server/health-check';
import { unaryAddItem } from './implementations/server/unary-add-item';
import { serverStreamingSubList } from './implementations/server/server-streaming-sub-list';
import { clientStreamingAddItem } from './implementations/server/client-streaming-add-item';
import { bidirectionalStreamingAsyncList } from './implementations/server/bidirectional-streaming';

const toDoServiceImpl: ToDoServiceServiceImplementation = {
    unaryAddItem,
    clientStreamingAddItem,
    serverStreamingSubList,
    bidirectionalStreamingAsyncList,
    healthCheck,
};

const server = createServer();
server.add(ToDoServiceDefinition, toDoServiceImpl);
server.listen(`${environment.serverHost}:${environment.serverPort}`);