package cli

import (
	"strconv"

	"github.com/alice/cwever/x/cwever/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMakeTransfer() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "make-transfer [amount] [address]",
		Short: "Broadcast message makeTransfer",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argAmount, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argAddress := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMakeTransfer(
				clientCtx.GetFromAddress().String(),
				argAmount,
				argAddress,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
