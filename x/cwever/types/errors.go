package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/cwever module sentinel errors
var (
	ErrSample           = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrCreatorCannotPay = sdkerrors.Register(ModuleName, 1200, "Creator cannot pay the bills")
	// TODO add more errors
)
