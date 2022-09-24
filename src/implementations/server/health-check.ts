import { DeepPartial, HealthCheckRes } from '../../protos/action';

export const healthCheck = async (): Promise<DeepPartial<HealthCheckRes>> => {
    return { statusCode: 200, statusMsg: "ok" };
}