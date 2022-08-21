import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Item extends jspb.Message {
  getName(): string;
  setName(value: string): Item;

  getPrice(): number;
  setPrice(value: number): Item;

  getMessage(): string;
  setMessage(value: string): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    name: string,
    price: number,
    message: string,
  }
}

export class List extends jspb.Message {
  getItemsList(): Array<Item>;
  setItemsList(value: Array<Item>): List;
  clearItemsList(): List;
  addItems(value?: Item, index?: number): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): List.AsObject;
  static toObject(includeInstance: boolean, msg: List): List.AsObject;
  static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): List;
  static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
}

export namespace List {
  export type AsObject = {
    itemsList: Array<Item.AsObject>,
  }
}

export class Filter extends jspb.Message {
  getName(): string;
  setName(value: string): Filter;

  getPrice(): number;
  setPrice(value: number): Filter;

  getOpstr(): string;
  setOpstr(value: string): Filter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    name: string,
    price: number,
    opstr: string,
  }
}

export class Calculate extends jspb.Message {
  getData(): string;
  setData(value: string): Calculate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Calculate.AsObject;
  static toObject(includeInstance: boolean, msg: Calculate): Calculate.AsObject;
  static serializeBinaryToWriter(message: Calculate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Calculate;
  static deserializeBinaryFromReader(message: Calculate, reader: jspb.BinaryReader): Calculate;
}

export namespace Calculate {
  export type AsObject = {
    data: string,
  }
}

export class CircleInfo extends jspb.Message {
  getColorcode(): string;
  setColorcode(value: string): CircleInfo;

  getX(): number;
  setX(value: number): CircleInfo;

  getY(): number;
  setY(value: number): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfo): CircleInfo.AsObject;
  static serializeBinaryToWriter(message: CircleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfo;
  static deserializeBinaryFromReader(message: CircleInfo, reader: jspb.BinaryReader): CircleInfo;
}

export namespace CircleInfo {
  export type AsObject = {
    colorcode: string,
    x: number,
    y: number,
  }
}

export class CircleInfoList extends jspb.Message {
  getCircleinfosList(): Array<CircleInfo>;
  setCircleinfosList(value: Array<CircleInfo>): CircleInfoList;
  clearCircleinfosList(): CircleInfoList;
  addCircleinfos(value?: CircleInfo, index?: number): CircleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: CircleInfoList): CircleInfoList.AsObject;
  static serializeBinaryToWriter(message: CircleInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleInfoList;
  static deserializeBinaryFromReader(message: CircleInfoList, reader: jspb.BinaryReader): CircleInfoList;
}

export namespace CircleInfoList {
  export type AsObject = {
    circleinfosList: Array<CircleInfo.AsObject>,
  }
}

