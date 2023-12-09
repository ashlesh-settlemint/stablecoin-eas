export const stablecoiFactoryAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "initialOwner",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "reserveConsumerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "capped",
        "type": "bool"
      }
    ],
    "name": "NewStablecoin",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "isOffChainOracle",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "feedAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "initialSupply",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxSupply",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "defaultAdmin",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "pauser",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "decimal",
        "type": "uint8"
      }
    ],
    "name": "deployStablecoin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllStableCoins",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "initialSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxSupply",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "defaultAdmin",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "pauser",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "burner",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "decimal",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "feedAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "coinAddress",
            "type": "address"
          }
        ],
        "internalType": "struct StableCoinFactory.Stablecoin[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "stableCoinAddress",
        "type": "address"
      }
    ],
    "name": "getStablecoinDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "initialSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxSupply",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "defaultAdmin",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "pauser",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "burner",
            "type": "address"
          },
          {
            "internalType": "uint8",
            "name": "decimal",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "feedAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "coinAddress",
            "type": "address"
          }
        ],
        "internalType": "struct StableCoinFactory.Stablecoin",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]