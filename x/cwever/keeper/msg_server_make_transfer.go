package keeper

import (
	"context"
	"strconv"

	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MakeTransfer(goCtx context.Context, msg *types.MsgMakeTransfer) (*types.MsgMakeTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	// _ = ctx

	// TODO upgarede newIndex
	var newIndex uint64 = 1
	msgMakeTransfer := types.MsgMakeTransfer{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		Address: msg.Address,
	}

	// TODO store tramsfer msg or delete
	_ = msgMakeTransfer

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(sdk.AttributeKeyAction, types.NextBatchEventKey),
			sdk.NewAttribute(types.NextBatchEventCreator, msg.Creator),
			sdk.NewAttribute(types.NextBatchEventIndex, strconv.FormatUint(newIndex, 10)),
			sdk.NewAttribute(types.NextBatchEventAddress, msg.Address),
			sdk.NewAttribute(types.NextBatchEventAmount, strconv.FormatUint(msg.Amount, 10)),
		),
	)

	return &types.MsgMakeTransferResponse{
		IdValue: newIndex,
	}, nil
}
