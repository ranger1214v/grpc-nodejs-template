/**
 * @fileoverview gRPC-Web generated client stub for AiiiGRPC
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as action_pb from './action_pb';
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
    action_pb.Item,
    action_pb.List,
    (request: action_pb.Item) => {
      return request.serializeBinary();
    },
    action_pb.List.deserializeBinary
  );

  unaryAddItem(
    request: action_pb.Item,
    metadata: grpcWeb.Metadata | null): Promise<action_pb.List>;

  unaryAddItem(
    request: action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: action_pb.List) => void): grpcWeb.ClientReadableStream<action_pb.List>;

  unaryAddItem(
    request: action_pb.Item,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: action_pb.List) => void) {
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
    action_pb.Filter,
    action_pb.Item,
    (request: action_pb.Filter) => {
      return request.serializeBinary();
    },
    action_pb.Item.deserializeBinary
  );

  serverStreamingSubList(
    request: action_pb.Filter,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<action_pb.Item> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/AiiiGRPC.ToDoService/ServerStreamingSubList',
      request,
      metadata || {},
      this.methodDescriptorServerStreamingSubList);
  }

}

