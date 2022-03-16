/* eslint-disable */
import { Params } from "../cwever/params";
import { NextBatch } from "../cwever/next_batch";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "alice.cwever.cwever";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextBatch !== undefined) {
            NextBatch.encode(message.nextBatch, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextBatch = NextBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.nextBatch !== undefined && object.nextBatch !== null) {
            message.nextBatch = NextBatch.fromJSON(object.nextBatch);
        }
        else {
            message.nextBatch = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.nextBatch !== undefined &&
            (obj.nextBatch = message.nextBatch
                ? NextBatch.toJSON(message.nextBatch)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.nextBatch !== undefined && object.nextBatch !== null) {
            message.nextBatch = NextBatch.fromPartial(object.nextBatch);
        }
        else {
            message.nextBatch = undefined;
        }
        return message;
    },
};
