package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/alice/cwever/testutil/keeper"
	"github.com/alice/cwever/testutil/nullify"
	"github.com/alice/cwever/x/cwever/types"
)

func TestNextBatchQuery(t *testing.T) {
	keeper, ctx := keepertest.CweverKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestNextBatch(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNextBatchRequest
		response *types.QueryGetNextBatchResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNextBatchRequest{},
			response: &types.QueryGetNextBatchResponse{NextBatch: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NextBatch(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
