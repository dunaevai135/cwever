package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/alice/cwever/testutil/keeper"
	"github.com/alice/cwever/x/cwever/keeper"
	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CweverKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
