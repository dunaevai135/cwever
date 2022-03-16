import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "alice.cwever.cwever";
export interface MsgMakeTransfer {
    creator: string;
    address: string;
    amount: number;
}
export interface MsgMakeTransferResponse {
    idValue: number;
}
export declare const MsgMakeTransfer: {
    encode(message: MsgMakeTransfer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMakeTransfer;
    fromJSON(object: any): MsgMakeTransfer;
    toJSON(message: MsgMakeTransfer): unknown;
    fromPartial(object: DeepPartial<MsgMakeTransfer>): MsgMakeTransfer;
};
export declare const MsgMakeTransferResponse: {
    encode(message: MsgMakeTransferResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMakeTransferResponse;
    fromJSON(object: any): MsgMakeTransferResponse;
    toJSON(message: MsgMakeTransferResponse): unknown;
    fromPartial(object: DeepPartial<MsgMakeTransferResponse>): MsgMakeTransferResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    MakeTransfer(request: MsgMakeTransfer): Promise<MsgMakeTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    MakeTransfer(request: MsgMakeTransfer): Promise<MsgMakeTransferResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
