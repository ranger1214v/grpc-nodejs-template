import { ServerWritableStream } from "grpc";
import { Calculate } from "../../../protos/action";


export const ClientStreamingCalculate = async (call: ServerWritableStream<Calculate>, callback: any) => {

    let text = '';
    let count = 0;

    call.on('data', (data: Calculate) => {
        text += data.data;
        if (++count >= 3) {
            callback(null, { data: `${text}=${eval(text)}` });
        }
    })

    call.on('end', () => {
        console.log('ClientStreamingCalculate => 連線結束', `${text}=`, eval(text));
    })
}
