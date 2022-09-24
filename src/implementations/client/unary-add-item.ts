import { ParsedArgs } from 'minimist';
import { ToDoServiceClient } from '../../protos/action';

export const unaryAddItem = async (client: ToDoServiceClient<{}>, argv: ParsedArgs) => {
    console.log('Client: UnaryAddItem start');
    return client.unaryAddItem({ name: argv.name || 'test name', message: argv.message || 'test message', })
        .then(result => console.log('HealthCheck =>', result));
}