/**
 * @fileoverview gRPC-Web generated client stub for AiiiGRPC
 * @enhanceable
 * @public
 */

/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_protos_action_pb from '../../src/protos/action_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ToDoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorUnaryAddItem = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/UnaryAddItem',
    grpcWeb.MethodType.UNARY,
    src_protos_action_pb.Item,
    src_protos_action_pb.List,
    (request: src_protos_action_pb.Item) => {
      return request.serializeBinary();
    },
    src_protos_action_pb.List.deserializeBinary
  );

  unaryAddItem(
    request: src_protos_action_pb.Item,
    metadata: grpcWeb.Metadata | null): Promise<src_protos_action_pb.List>;

  unaryAddItem(
    request: src_protos_action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_protos_action_pb.List) => void): grpcWeb.ClientReadableStream<src_protos_action_pb.List>;

  unaryAddItem(
    request: src_protos_action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_protos_action_pb.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/AiiiGRPC.ToDoService/UnaryAddItem',
        request,
        metadata || {},
        this.methodDescriptorUnaryAddItem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/AiiiGRPC.ToDoService/UnaryAddItem',
    request,
    metadata || {},
    this.methodDescriptorUnaryAddItem);
  }

  methodDescriptorServerStreamingSubList = new grpcWeb.MethodDescriptor(
    '/AiiiGRPC.ToDoService/ServerStreamingSubList',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_protos_action_pb.Filter,
    src_protos_action_pb.Item,
    (request: src_protos_action_pb.Filter) => {
      return request.serializeBinary();
    },
    src_protos_action_pb.Item.deserializeBinary
  );

  serverStreamingSubList(
    request: src_protos_action_pb.Filter,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<src_protos_action_pb.Item> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AiiiGRPC.ToDoService/ServerStreamingSubList',
      request,
      metadata || {},
      this.methodDescriptorServerStreamingSubList);
  }

}

