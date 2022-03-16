package cli

import (
	"context"

	"github.com/alice/cwever/x/cwever/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdShowNextBatch() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-next-batch",
		Short: "shows nextBatch",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetNextBatchRequest{}

			res, err := queryClient.NextBatch(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
