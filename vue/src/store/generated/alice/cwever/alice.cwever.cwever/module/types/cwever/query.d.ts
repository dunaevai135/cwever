import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../cwever/params";
import { NextBatch } from "../cwever/next_batch";
export declare const protobufPackage = "alice.cwever.cwever";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetNextBatchRequest {
}
export interface QueryGetNextBatchResponse {
    NextBatch: NextBatch | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetNextBatchRequest: {
    encode(_: QueryGetNextBatchRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextBatchRequest;
    fromJSON(_: any): QueryGetNextBatchRequest;
    toJSON(_: QueryGetNextBatchRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetNextBatchRequest>): QueryGetNextBatchRequest;
};
export declare const QueryGetNextBatchResponse: {
    encode(message: QueryGetNextBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextBatchResponse;
    fromJSON(object: any): QueryGetNextBatchResponse;
    toJSON(message: QueryGetNextBatchResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNextBatchResponse>): QueryGetNextBatchResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a NextBatch by index. */
    NextBatch(request: QueryGetNextBatchRequest): Promise<QueryGetNextBatchResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    NextBatch(request: QueryGetNextBatchRequest): Promise<QueryGetNextBatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
