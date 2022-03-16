package cwever_test

import (
	"testing"

	keepertest "github.com/alice/cwever/testutil/keeper"
	"github.com/alice/cwever/testutil/nullify"
	"github.com/alice/cwever/x/cwever"
	"github.com/alice/cwever/x/cwever/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CweverKeeper(t)
	cwever.InitGenesis(ctx, *k, genesisState)
	got := cwever.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
