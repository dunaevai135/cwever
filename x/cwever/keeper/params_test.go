package keeper_test

import (
	"testing"

	testkeeper "github.com/alice/cwever/testutil/keeper"
	"github.com/alice/cwever/x/cwever/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CweverKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
