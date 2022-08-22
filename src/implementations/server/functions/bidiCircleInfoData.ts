import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { Subject } from "rxjs";

const circleInfos: CircleInfo[]=[];
const subject = new Subject<CircleInfo>();
export const BidiCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {
    let init = false;
    call.on('data', (circleInfo: CircleInfo) => {
        console.log('BidiCircleInfoData =>', circleInfo)

        let originalCircleInfo = circleInfos.find(c => c.colorCode == circleInfo.colorCode);
        if (!originalCircleInfo) {
            circleInfos.push(circleInfo);
        }else
        {
            originalCircleInfo.x = circleInfo.x;
            originalCircleInfo.y = circleInfo.y
        }

        if(!init){
            init = true;
            main();
        }
        
        subject.next(circleInfo);


    });

    call.on('end', () => {
        console.log('BidiCircleInfoData => 連線結束');
    });

    async function main() {
        subject.subscribe(x => call.write({ circleInfos: circleInfos }));
    }
}