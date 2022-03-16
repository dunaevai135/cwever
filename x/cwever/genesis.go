package cwever

import (
	"github.com/alice/cwever/x/cwever/keeper"
	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined
	if genState.NextBatch != nil {
		k.SetNextBatch(ctx, *genState.NextBatch)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all nextBatch
	nextBatch, found := k.GetNextBatch(ctx)
	if found {
		genesis.NextBatch = &nextBatch
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
