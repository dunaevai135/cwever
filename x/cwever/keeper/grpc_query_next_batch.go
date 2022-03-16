package keeper

import (
	"context"

	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NextBatch(c context.Context, req *types.QueryGetNextBatchRequest) (*types.QueryGetNextBatchResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNextBatch(ctx)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetNextBatchResponse{NextBatch: val}, nil
}
