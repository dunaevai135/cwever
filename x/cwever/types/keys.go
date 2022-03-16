package types

const (
	// ModuleName defines the module name
	ModuleName = "cwever"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_cwever"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	CreateTransactionGas = 10
)

const (
	NextBatchKey          = "NextBatch-value-"
	NextBatchEventKey     = "NewBatchCreated"
	NextBatchEventCreator = "Creator"
	NextBatchEventIndex   = "Index"
	NextBatchEventAddress = "Address"
	NextBatchEventAmount  = "Amount"
	NextBatchEventToken   = "Token"
)
