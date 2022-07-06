import { ParsedArgs } from 'minimist';

export const UnaryAddItem = async (client: any, argv: ParsedArgs) => {
    console.log('Client: UnaryAddItem start');
    client.UnaryAddItem({ name: argv.name || 'name:foo', price: argv.price || 0, message: argv.message || 'message:foo', }, (err: any, response: any) => console.log({ err, response: JSON.stringify(response) }));
}