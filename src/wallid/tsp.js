
export default {
  "contractName": "Tsp",
  "abi":  [
	{
		"constant": false,
		"inputs": [
			{
				"name": "hash",
				"type": "bytes"
			},
			{
				"name": "hash_meta",
				"type": "bytes"
			},
			{
				"name": "metamask_pkey",
				"type": "bytes"
			},
			{
				"name": "wallet_address",
				"type": "address"
			},
			{
				"name": "document_id",
				"type": "bytes"
			}
		],
		"name": "addDocument",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "hash",
				"type": "bytes"
			},
			{
				"indexed": false,
				"name": "hash_meta",
				"type": "bytes"
			},
			{
				"indexed": false,
				"name": "metamask_pkey",
				"type": "bytes"
			},
			{
				"indexed": false,
				"name": "wallet_address",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "document_id",
				"type": "bytes"
			}
		],
		"name": "AddedDocument",
		"type": "event"
	}
]

}
