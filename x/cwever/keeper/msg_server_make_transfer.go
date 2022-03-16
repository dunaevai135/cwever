package keeper

import (
	"context"

	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MakeTransfer(goCtx context.Context, msg *types.MsgMakeTransfer) (*types.MsgMakeTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgMakeTransferResponse{}, nil
}
