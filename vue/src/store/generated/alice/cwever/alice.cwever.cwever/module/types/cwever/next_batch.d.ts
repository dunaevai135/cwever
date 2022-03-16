import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "alice.cwever.cwever";
export interface NextBatch {
    idValue: number;
    address: number;
    amount: number;
}
export declare const NextBatch: {
    encode(message: NextBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NextBatch;
    fromJSON(object: any): NextBatch;
    toJSON(message: NextBatch): unknown;
    fromPartial(object: DeepPartial<NextBatch>): NextBatch;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
