import { BehaviorSubject } from "rxjs";
import { scan } from "rxjs/operators";
import { Item } from "../protos/action";

export const messageItem$ = new BehaviorSubject(<Item>{ name: 'Aiii Bot', message: '開始吧' });
export const messageList$ = messageItem$.pipe(
    scan((current: Item[], newItem: Item) => [...current, newItem], [])
);
