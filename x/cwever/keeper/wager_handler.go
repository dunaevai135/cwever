package keeper

import (
	"github.com/alice/cwever/x/cwever/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// Returns an error if the player has not enough funds.
func (k *Keeper) CollectWager(ctx sdk.Context, storedGame *types.MsgMakeTransfer) error {
	// Make the player pay the wager at the beginning

	address, err := sdk.AccAddressFromBech32(storedGame.Creator)

	if err != nil {
		panic(err.Error())
	}

	// TODO split in files
	err = k.bank.SendCoinsFromAccountToModule(ctx, address, types.ModuleName, sdk.NewCoins(sdk.NewCoin(sdk.DefaultBondDenom, sdk.NewInt(int64(storedGame.Amount)))))
	if err != nil {
		return sdkerrors.Wrapf(err, types.ErrCreatorCannotPay.Error())
	}

	return nil
}

// Game must have a valid winner.
// func (k *Keeper) MustPayBills(ctx sdk.Context, storedGame *types.MsgMakeTransfer) {
// 	// Pay the winnings to the winner
// 	winnerAddress, found, err := storedGame.GetAddress()
// 	if err != nil {
// 		panic(err.Error())
// 	}
// 	if !found {
// 		panic(fmt.Sprintf(types.ErrCannotFindWinnerByColor.Error(), storedGame.Winner))
// 	}
// 	winnings := storedGame.GetWagerCoin()
// 	if storedGame.MoveCount == 0 {
// 		panic(types.ErrNothingToPay.Error())
// 	} else if 1 < storedGame.MoveCount {
// 		winnings = winnings.Add(winnings)
// 	}
// 	err = k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, winnerAddress, sdk.NewCoins(winnings))
// 	if err != nil {
// 		panic(types.ErrCannotPayWinnings.Error())
// 	}
// }
