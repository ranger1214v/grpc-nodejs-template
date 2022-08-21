import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { circleInfoItem$, circleInfoList$ } from "../../../cache/circleInfoList";

export const BidiCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {
    let init = false;
    call.on('data', (circleInfo: CircleInfo) => {
        console.log('BidiCircleInfoData =>', circleInfo)
        circleInfoItem$.next(circleInfo);
        if(!init){
            init = true;
            main();
        }
    });

    call.on('end', () => {
        console.log('BidiCircleInfoData => 連線結束');
    });

    async function main() {
        circleInfoList$.subscribe(circleInfo => call.write({ circleInfos: circleInfo }));
    }
}