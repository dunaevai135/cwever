package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/alice/cwever/testutil/keeper"
	"github.com/alice/cwever/testutil/nullify"
	"github.com/alice/cwever/x/cwever/keeper"
	"github.com/alice/cwever/x/cwever/types"
)

func createTestNextBatch(keeper *keeper.Keeper, ctx sdk.Context) types.NextBatch {
	item := types.NextBatch{}
	keeper.SetNextBatch(ctx, item)
	return item
}

func TestNextBatchGet(t *testing.T) {
	keeper, ctx := keepertest.CweverKeeper(t)
	item := createTestNextBatch(keeper, ctx)
	rst, found := keeper.GetNextBatch(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNextBatchRemove(t *testing.T) {
	keeper, ctx := keepertest.CweverKeeper(t)
	createTestNextBatch(keeper, ctx)
	keeper.RemoveNextBatch(ctx)
	_, found := keeper.GetNextBatch(ctx)
	require.False(t, found)
}
