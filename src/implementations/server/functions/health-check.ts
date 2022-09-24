import { ServerWritableStream } from 'grpc';
import { HealthCheckRes } from '../../../protos/action';

export const HealthCheck = (call: ServerWritableStream<HealthCheckRes>, callback: any) => {
    const healthCheckRes: HealthCheckRes = { statusMsg: 'ok', statusCode: 200 };
    callback(null, healthCheckRes);
}