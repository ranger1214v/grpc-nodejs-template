import { BehaviorSubject } from "rxjs";
import { scan } from "rxjs/operators";
import { CircleInfo } from "../protos/action";

let firstCircleInfoItem :BehaviorSubject<CircleInfo>  | undefined= undefined;

if(!firstCircleInfoItem)
{
    firstCircleInfoItem =  new BehaviorSubject(<CircleInfo>{ colorCode: 'red', x: 300, y: 150 })
}

export const circleInfoItem$ = firstCircleInfoItem;
export const circleInfoList$ = circleInfoItem$.pipe(
    scan((current: CircleInfo[], circleInfo: CircleInfo) => {
        console.log(current,circleInfo);
        let originalCircleInfo = current.find(c => c.colorCode == circleInfo.colorCode);
        if (!originalCircleInfo) {
            return [...current, circleInfo];
        }
        originalCircleInfo.x = circleInfo.x;
        originalCircleInfo.y = circleInfo.y

        return current;
    }, [])
);
