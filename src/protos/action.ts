/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { Empty } from "../../google/protobuf/empty";
import { map } from "rxjs/operators";

export const protobufPackage = "AiiiGRPC";

export interface Item {
  name: string;
  price: number;
  message: string;
}

export interface List {
  items: Item[];
}

export interface Filter {
  name: string;
  price: number;
  opStr: string;
}

export interface Calculate {
  data: string;
}

export interface CircleInfo {
  colorCode: string;
  x: number;
  y: number;
}

export interface CircleInfoList {
  circleInfos: CircleInfo[];
}

function createBaseItem(): Item {
  return { name: "", price: 0, message: "" };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.price = reader.int32();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Item {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Item>, I>>(object: I): Item {
    const message = createBaseItem();
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseList(): List {
  return { items: [] };
}

export const List = {
  encode(message: List, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): List {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): List {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Item.fromJSON(e))
        : [],
    };
  },

  toJSON(message: List): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Item.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<List>, I>>(object: I): List {
    const message = createBaseList();
    message.items = object.items?.map((e) => Item.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFilter(): Filter {
  return { name: "", price: 0, opStr: "" };
}

export const Filter = {
  encode(
    message: Filter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    if (message.opStr !== "") {
      writer.uint32(26).string(message.opStr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.price = reader.int32();
          break;
        case 3:
          message.opStr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      opStr: isSet(object.opStr) ? String(object.opStr) : "",
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.price !== undefined && (obj.price = Math.round(message.price));
    message.opStr !== undefined && (obj.opStr = message.opStr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.name = object.name ?? "";
    message.price = object.price ?? 0;
    message.opStr = object.opStr ?? "";
    return message;
  },
};

function createBaseCalculate(): Calculate {
  return { data: "" };
}

export const Calculate = {
  encode(
    message: Calculate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Calculate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCalculate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Calculate {
    return {
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: Calculate): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Calculate>, I>>(
    object: I
  ): Calculate {
    const message = createBaseCalculate();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseCircleInfo(): CircleInfo {
  return { colorCode: "", x: 0, y: 0 };
}

export const CircleInfo = {
  encode(
    message: CircleInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.colorCode !== "") {
      writer.uint32(10).string(message.colorCode);
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircleInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.colorCode = reader.string();
          break;
        case 2:
          message.x = reader.int32();
          break;
        case 3:
          message.y = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircleInfo {
    return {
      colorCode: isSet(object.colorCode) ? String(object.colorCode) : "",
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: CircleInfo): unknown {
    const obj: any = {};
    message.colorCode !== undefined && (obj.colorCode = message.colorCode);
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CircleInfo>, I>>(
    object: I
  ): CircleInfo {
    const message = createBaseCircleInfo();
    message.colorCode = object.colorCode ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseCircleInfoList(): CircleInfoList {
  return { circleInfos: [] };
}

export const CircleInfoList = {
  encode(
    message: CircleInfoList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.circleInfos) {
      CircleInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CircleInfoList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCircleInfoList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circleInfos.push(CircleInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CircleInfoList {
    return {
      circleInfos: Array.isArray(object?.circleInfos)
        ? object.circleInfos.map((e: any) => CircleInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CircleInfoList): unknown {
    const obj: any = {};
    if (message.circleInfos) {
      obj.circleInfos = message.circleInfos.map((e) =>
        e ? CircleInfo.toJSON(e) : undefined
      );
    } else {
      obj.circleInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CircleInfoList>, I>>(
    object: I
  ): CircleInfoList {
    const message = createBaseCircleInfoList();
    message.circleInfos =
      object.circleInfos?.map((e) => CircleInfo.fromPartial(e)) || [];
    return message;
  },
};

export interface ToDoService {
  UnaryAddItem(request: Item): Promise<List>;
  ClientStreamingAddItem(request: Observable<Item>): Promise<Empty>;
  ServerStreamingSubList(request: Filter): Observable<Item>;
  BidirectionalStreamingAsyncList(request: Observable<Item>): Observable<List>;
  ClientStreamingCalculate(request: Observable<Calculate>): Promise<Calculate>;
  BidiCircleInfoData(
    request: Observable<CircleInfo>
  ): Observable<CircleInfoList>;
}

export class ToDoServiceClientImpl implements ToDoService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UnaryAddItem = this.UnaryAddItem.bind(this);
    this.ClientStreamingAddItem = this.ClientStreamingAddItem.bind(this);
    this.ServerStreamingSubList = this.ServerStreamingSubList.bind(this);
    this.BidirectionalStreamingAsyncList =
      this.BidirectionalStreamingAsyncList.bind(this);
    this.ClientStreamingCalculate = this.ClientStreamingCalculate.bind(this);
    this.BidiCircleInfoData = this.BidiCircleInfoData.bind(this);
  }
  UnaryAddItem(request: Item): Promise<List> {
    const data = Item.encode(request).finish();
    const promise = this.rpc.request(
      "AiiiGRPC.ToDoService",
      "UnaryAddItem",
      data
    );
    return promise.then((data) => List.decode(new _m0.Reader(data)));
  }

  ClientStreamingAddItem(request: Observable<Item>): Promise<Empty> {
    const data = request.pipe(map((request) => Item.encode(request).finish()));
    const promise = this.rpc.clientStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ClientStreamingAddItem",
      data
    );
    return promise.then((data) => Empty.decode(new _m0.Reader(data)));
  }

  ServerStreamingSubList(request: Filter): Observable<Item> {
    const data = Filter.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ServerStreamingSubList",
      data
    );
    return result.pipe(map((data) => Item.decode(new _m0.Reader(data))));
  }

  BidirectionalStreamingAsyncList(request: Observable<Item>): Observable<List> {
    const data = request.pipe(map((request) => Item.encode(request).finish()));
    const result = this.rpc.bidirectionalStreamingRequest(
      "AiiiGRPC.ToDoService",
      "BidirectionalStreamingAsyncList",
      data
    );
    return result.pipe(map((data) => List.decode(new _m0.Reader(data))));
  }

  ClientStreamingCalculate(request: Observable<Calculate>): Promise<Calculate> {
    const data = request.pipe(
      map((request) => Calculate.encode(request).finish())
    );
    const promise = this.rpc.clientStreamingRequest(
      "AiiiGRPC.ToDoService",
      "ClientStreamingCalculate",
      data
    );
    return promise.then((data) => Calculate.decode(new _m0.Reader(data)));
  }

  BidiCircleInfoData(
    request: Observable<CircleInfo>
  ): Observable<CircleInfoList> {
    const data = request.pipe(
      map((request) => CircleInfo.encode(request).finish())
    );
    const result = this.rpc.bidirectionalStreamingRequest(
      "AiiiGRPC.ToDoService",
      "BidiCircleInfoData",
      data
    );
    return result.pipe(
      map((data) => CircleInfoList.decode(new _m0.Reader(data)))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
  clientStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Promise<Uint8Array>;
  serverStreamingRequest(
    service: string,
    method: string,
    data: Uint8Array
  ): Observable<Uint8Array>;
  bidirectionalStreamingRequest(
    service: string,
    method: string,
    data: Observable<Uint8Array>
  ): Observable<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
