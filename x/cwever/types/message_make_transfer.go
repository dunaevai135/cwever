package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMakeTransfer = "make_transfer"

var _ sdk.Msg = &MsgMakeTransfer{}

func NewMsgMakeTransfer(creator string, amount string, address string) *MsgMakeTransfer {
	return &MsgMakeTransfer{
		Creator: creator,
		Amount:  amount,
		Address: address,
	}
}

func (msg *MsgMakeTransfer) Route() string {
	return RouterKey
}

func (msg *MsgMakeTransfer) Type() string {
	return TypeMsgMakeTransfer
}

func (msg *MsgMakeTransfer) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMakeTransfer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMakeTransfer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
