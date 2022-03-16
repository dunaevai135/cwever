package keeper

import (
	"github.com/alice/cwever/x/cwever/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetNextBatch set nextBatch in the store
func (k Keeper) SetNextBatch(ctx sdk.Context, nextBatch types.NextBatch) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextBatchKey))
	b := k.cdc.MustMarshal(&nextBatch)
	store.Set([]byte{0}, b)
}

// GetNextBatch returns nextBatch
func (k Keeper) GetNextBatch(ctx sdk.Context) (val types.NextBatch, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextBatchKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNextBatch removes nextBatch from the store
func (k Keeper) RemoveNextBatch(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextBatchKey))
	store.Delete([]byte{0})
}
