/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "alice.cwever.cwever";
const baseMsgMakeTransfer = { creator: "", amount: "", address: "" };
export const MsgMakeTransfer = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMakeTransfer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMakeTransfer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMakeTransfer };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgMakeTransferResponse = { idValue: "" };
export const MsgMakeTransferResponse = {
    encode(message, writer = Writer.create()) {
        if (message.idValue !== "") {
            writer.uint32(10).string(message.idValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgMakeTransferResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgMakeTransferResponse,
        };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.idValue !== undefined && (obj.idValue = message.idValue);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgMakeTransferResponse,
        };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    MakeTransfer(request) {
        const data = MsgMakeTransfer.encode(request).finish();
        const promise = this.rpc.request("alice.cwever.cwever.Msg", "MakeTransfer", data);
        return promise.then((data) => MsgMakeTransferResponse.decode(new Reader(data)));
    }
}
