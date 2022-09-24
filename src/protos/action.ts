/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "AiiiGRPC";

export interface Item {
  name: string;
  message: string;
}

export interface HealthCheckRes {
  statusCode: number;
  statusMsg: string;
}

function createBaseItem(): Item {
  return { name: "", message: "" };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
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
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.name = object.name ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseHealthCheckRes(): HealthCheckRes {
  return { statusCode: 0, statusMsg: "" };
}

export const HealthCheckRes = {
  encode(message: HealthCheckRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int32(message.statusCode);
    }
    if (message.statusMsg !== "") {
      writer.uint32(18).string(message.statusMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HealthCheckRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statusCode = reader.int32();
          break;
        case 2:
          message.statusMsg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HealthCheckRes {
    return {
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
      statusMsg: isSet(object.statusMsg) ? String(object.statusMsg) : "",
    };
  },

  toJSON(message: HealthCheckRes): unknown {
    const obj: any = {};
    message.statusCode !== undefined && (obj.statusCode = Math.round(message.statusCode));
    message.statusMsg !== undefined && (obj.statusMsg = message.statusMsg);
    return obj;
  },

  fromPartial(object: DeepPartial<HealthCheckRes>): HealthCheckRes {
    const message = createBaseHealthCheckRes();
    message.statusCode = object.statusCode ?? 0;
    message.statusMsg = object.statusMsg ?? "";
    return message;
  },
};

export type ToDoServiceDefinition = typeof ToDoServiceDefinition;
export const ToDoServiceDefinition = {
  name: "ToDoService",
  fullName: "AiiiGRPC.ToDoService",
  methods: {
    unaryAddItem: {
      name: "UnaryAddItem",
      requestType: Item,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    clientStreamingAddItem: {
      name: "ClientStreamingAddItem",
      requestType: Item,
      requestStream: true,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    serverStreamingSubList: {
      name: "ServerStreamingSubList",
      requestType: Empty,
      requestStream: false,
      responseType: Item,
      responseStream: true,
      options: {},
    },
    bidirectionalStreamingAsyncList: {
      name: "BidirectionalStreamingAsyncList",
      requestType: Item,
      requestStream: true,
      responseType: Item,
      responseStream: true,
      options: {},
    },
    healthCheck: {
      name: "HealthCheck",
      requestType: Empty,
      requestStream: false,
      responseType: HealthCheckRes,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ToDoServiceServiceImplementation<CallContextExt = {}> {
  unaryAddItem(request: Item, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  clientStreamingAddItem(
    request: AsyncIterable<Item>,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  serverStreamingSubList(
    request: Empty,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<Item>>;
  bidirectionalStreamingAsyncList(
    request: AsyncIterable<Item>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<Item>>;
  healthCheck(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<HealthCheckRes>>;
}

export interface ToDoServiceClient<CallOptionsExt = {}> {
  unaryAddItem(request: DeepPartial<Item>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  clientStreamingAddItem(
    request: AsyncIterable<DeepPartial<Item>>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  serverStreamingSubList(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<Item>;
  bidirectionalStreamingAsyncList(
    request: AsyncIterable<DeepPartial<Item>>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<Item>;
  healthCheck(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<HealthCheckRes>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
