package keeper

import (
	"github.com/alice/cwever/x/cwever/types"
)

var _ types.QueryServer = Keeper{}
