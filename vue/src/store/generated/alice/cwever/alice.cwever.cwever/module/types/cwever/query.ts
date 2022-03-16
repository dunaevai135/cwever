/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../cwever/params";
import { NextBatch } from "../cwever/next_batch";

export const protobufPackage = "alice.cwever.cwever";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetNextBatchRequest {}

export interface QueryGetNextBatchResponse {
  NextBatch: NextBatch | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetNextBatchRequest: object = {};

export const QueryGetNextBatchRequest = {
  encode(
    _: QueryGetNextBatchRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextBatchRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextBatchRequest,
    } as QueryGetNextBatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetNextBatchRequest {
    const message = {
      ...baseQueryGetNextBatchRequest,
    } as QueryGetNextBatchRequest;
    return message;
  },

  toJSON(_: QueryGetNextBatchRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNextBatchRequest>
  ): QueryGetNextBatchRequest {
    const message = {
      ...baseQueryGetNextBatchRequest,
    } as QueryGetNextBatchRequest;
    return message;
  },
};

const baseQueryGetNextBatchResponse: object = {};

export const QueryGetNextBatchResponse = {
  encode(
    message: QueryGetNextBatchResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NextBatch !== undefined) {
      NextBatch.encode(message.NextBatch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextBatchResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextBatchResponse,
    } as QueryGetNextBatchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NextBatch = NextBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNextBatchResponse {
    const message = {
      ...baseQueryGetNextBatchResponse,
    } as QueryGetNextBatchResponse;
    if (object.NextBatch !== undefined && object.NextBatch !== null) {
      message.NextBatch = NextBatch.fromJSON(object.NextBatch);
    } else {
      message.NextBatch = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNextBatchResponse): unknown {
    const obj: any = {};
    message.NextBatch !== undefined &&
      (obj.NextBatch = message.NextBatch
        ? NextBatch.toJSON(message.NextBatch)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNextBatchResponse>
  ): QueryGetNextBatchResponse {
    const message = {
      ...baseQueryGetNextBatchResponse,
    } as QueryGetNextBatchResponse;
    if (object.NextBatch !== undefined && object.NextBatch !== null) {
      message.NextBatch = NextBatch.fromPartial(object.NextBatch);
    } else {
      message.NextBatch = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a NextBatch by index. */
  NextBatch(
    request: QueryGetNextBatchRequest
  ): Promise<QueryGetNextBatchResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alice.cwever.cwever.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  NextBatch(
    request: QueryGetNextBatchRequest
  ): Promise<QueryGetNextBatchResponse> {
    const data = QueryGetNextBatchRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alice.cwever.cwever.Query",
      "NextBatch",
      data
    );
    return promise.then((data) =>
      QueryGetNextBatchResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
