import { ThemingProps } from '@chakra-ui/react'
import { Chain, mainnet, sepolia, polygon, optimism, arbitrum } from 'viem/chains'

export const SITE_NAME = 'Gov Deployer'
export const APP_VERSION = 'v0.10.0'
export const SITE_DESCRIPTION = 'Deploy your DAO in a few seconds'
export const SITE_URL = 'https://w3hc.org'
export const THEME_INITIAL_COLOR = 'dark'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'W3HC'
export const SOCIAL_GITHUB = 'w3hc/nexth'

export const ETH_CHAINS = [sepolia, mainnet, optimism, polygon, arbitrum]
export const infuraId = process.env.NEXT_PUBLIC_INFURA_ID

export const NFT_ABI = <const>[
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialOwner',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: '_firstMembers',
        type: 'address[]',
      },
      {
        internalType: 'string',
        name: '_uri',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CheckpointUnorderedInsertion',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ECDSAInvalidSignature',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'ECDSAInvalidSignatureS',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
      {
        internalType: 'uint48',
        name: 'clock',
        type: 'uint48',
      },
    ],
    name: 'ERC5805FutureLookup',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC6372InconsistentClock',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC721EnumerableForbiddenBatchMint',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721IncorrectOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721InsufficientApproval',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOperator',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC721InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ERC721NonexistentToken',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'ERC721OutOfBoundsIndex',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'currentNonce',
        type: 'uint256',
      },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidShortString',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'StringTooLong',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
    ],
    name: 'VotesExpiredSignature',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_fromTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_toTokenId',
        type: 'uint256',
      },
    ],
    name: 'BatchMetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'fromDelegate',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toDelegate',
        type: 'address',
      },
    ],
    name: 'DelegateChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'delegate',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousVotes',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newVotes',
        type: 'uint256',
      },
    ],
    name: 'DelegateVotesChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'EIP712DomainChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokenId',
        type: 'uint256',
      },
    ],
    name: 'MetadataUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clock',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
    ],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'delegatee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expiry',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'delegates',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      {
        internalType: 'bytes1',
        name: 'fields',
        type: 'bytes1',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'verifyingContract',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[]',
        name: 'extensions',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'getPastTotalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'getPastVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'govBurn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'safeMint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'uri',
        type: 'string',
      },
    ],
    name: 'setMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
export const NFT_BYTECODE =
  '0x61016060405234801562000011575f80fd5b506040516200403e3803806200403e833981016040819052620000349162001120565b6040805180820190915260018152603160f81b602082015282908682845f6200005e8382620012e6565b5060016200006d8282620012e6565b5050506001600160a01b0381166200009f57604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b620000aa81620001ba565b50620000b882600c6200020b565b61012052620000c981600d6200020b565b61014052815160208084019190912060e052815190820120610100524660a0526200015660e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525f5b8451811015620001ae5762000199858281518110620001845762000184620013ae565b6020026020010151856200024360201b60201c565b80620001a581620013d6565b91505062000161565b50505050505062001534565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f6020835110156200022a57620002228362000282565b90506200023d565b81620002378482620012e6565b5060ff90505b92915050565b6200024d620002c4565b601280545f91826200025f83620013d6565b909155509050620002718382620002f5565b6200027d81836200031a565b505050565b5f80829050601f81511115620002af578260405163305a27a960e01b81526004016200009691906200141e565b8051620002bc8262001432565b179392505050565b600b546001600160a01b03163314620002f35760405163118cdaa760e01b815233600482015260240162000096565b565b62000316828260405180602001604052805f8152506200036b60201b60201c565b5050565b5f828152600a60205260409020620003338282620012e6565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b62000377838362000385565b6200027d5f848484620003ec565b6001600160a01b038216620003b057604051633250574960e11b81525f600482015260240162000096565b5f620003be83838362000520565b90506001600160a01b038116156200027d576040516339e3563760e11b81525f600482015260240162000096565b6001600160a01b0383163b156200051a57604051630a85bd0160e11b81526001600160a01b0384169063150b7a02906200043190339088908790879060040162001456565b6020604051808303815f875af19250505080156200046e575060408051601f3d908101601f191682019092526200046b9181019062001494565b60015b620004da573d8080156200049e576040519150601f19603f3d011682016040523d82523d5f602084013e620004a3565b606091505b5080515f03620004d257604051633250574960e11b81526001600160a01b038516600482015260240162000096565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b146200051857604051633250574960e11b81526001600160a01b038516600482015260240162000096565b505b50505050565b5f6001600160a01b03821615806200053f57506001600160a01b038416155b6200058d5760405162461bcd60e51b815260206004820152601c60248201527f54686973204e4654206973206e6f74207472616e7366657261626c6500000000604482015260640162000096565b6200059a848484620005a2565b949350505050565b5f80620005b1858585620005c1565b90506200059a818660016200069b565b5f80620005d085858562000732565b90506001600160a01b0381166200062f576200062984600880545f838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b62000655565b846001600160a01b0316816001600160a01b03161462000655576200065581856200082b565b6001600160a01b03851662000675576200066f84620008bb565b6200059a565b846001600160a01b0316816001600160a01b0316146200059a576200059a85856200096d565b6001600160a01b038316620006d057620006cd601162000a7e620009bf60201b17620006c784620009d3565b62000a0c565b50505b6001600160a01b038216620006ff57620006fc601162000a9062000a3f60201b17620006c784620009d3565b50505b6001600160a01b038381165f908152600f60205260408082205485841683529120546200027d9291821691168362000a4c565b5f828152600260205260408120546001600160a01b039081169083161562000761576200076181848662000bae565b6001600160a01b038116156200079e576200077f5f85818062000c18565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615620007cd576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f620008378362000d43565b5f8381526007602052604090205490915080821462000889576001600160a01b0384165f9081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b505f9182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008545f90620008ce90600190620014bd565b5f8381526009602052604081205460088054939450909284908110620008f857620008f8620013ae565b905f5260205f200154905080600883815481106200091a576200091a620013ae565b5f918252602080832090910192909255828152600990915260408082208490558582528120556008805480620009545762000954620014d3565b600190038181905f5260205f20015f9055905550505050565b5f60016200097b8462000d43565b620009879190620014bd565b6001600160a01b039093165f908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b5f620009cc8284620014e7565b9392505050565b5f6001600160d01b0382111562000a08576040516306dfcc6560e41b815260d060048201526024810183905260440162000096565b5090565b5f8062000a324262000a2962000a228862000d8a565b868860201c565b87919062000dd6565b915091505b935093915050565b5f620009cc828462001511565b816001600160a01b0316836001600160a01b03161415801562000a6e57505f81115b156200027d576001600160a01b0383161562000b0f576001600160a01b0383165f9081526010602090815260408220829162000abb919062000a3f901b62000a9017620006c786620009d3565b6001600160d01b031691506001600160d01b03169150846001600160a01b03165f805160206200401e833981519152838360405162000b04929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156200027d576001600160a01b0382165f9081526010602090815260408220829162000b569190620009bf901b62000a7e17620006c786620009d3565b6001600160d01b031691506001600160d01b03169150836001600160a01b03165f805160206200401e833981519152838360405162000b9f929190918252602082015260400190565b60405180910390a25050505050565b62000bbb83838362000de5565b6200027d576001600160a01b03831662000bec57604051637e27328960e01b81526004810182905260240162000096565b60405163177e802f60e01b81526001600160a01b03831660048201526024810182905260440162000096565b808062000c2d57506001600160a01b03821615155b1562000d14575f62000c3f8462000e68565b90506001600160a01b0383161580159062000c6c5750826001600160a01b0316816001600160a01b031614155b801562000c9e57506001600160a01b038082165f9081526005602090815260408083209387168352929052205460ff16155b1562000cc95760405163a9fbf51f60e01b81526001600160a01b038416600482015260240162000096565b811562000d125783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f6001600160a01b03821662000d6f576040516322718ad960e21b81525f600482015260240162000096565b506001600160a01b03165f9081526003602052604090205490565b80545f90801562000dce5762000db48362000da7600184620014bd565b5f91825260209091200190565b54660100000000000090046001600160d01b0316620009cc565b5f9392505050565b5f8062000a3285858562000ea2565b5f6001600160a01b038316158015906200059a5750826001600160a01b0316846001600160a01b0316148062000e3f57506001600160a01b038085165f9081526005602090815260408083209387168352929052205460ff165b806200059a5750505f908152600460205260409020546001600160a01b03908116911614919050565b5f818152600260205260408120546001600160a01b0316806200023d57604051637e27328960e01b81526004810184905260240162000096565b82545f908190801562000fd2575f62000ec28762000da7600185620014bd565b60408051808201909152905465ffffffffffff80821680845266010000000000009092046001600160d01b03166020840152919250908716101562000f1a57604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff80881691160362000f6e578462000f418862000da7600186620014bd565b80546001600160d01b039290921666010000000000000265ffffffffffff90921691909117905562000fc1565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d555f8d815291909120945191519092166601000000000000029216919091179101555b60200151925083915062000a379050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316660100000000000002919093161792019190915590508162000a37565b80516001600160a01b038116811462001047575f80fd5b919050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b03811182821017156200108b576200108b6200104c565b604052919050565b5f5b83811015620010af57818101518382015260200162001095565b50505f910152565b5f82601f830112620010c7575f80fd5b81516001600160401b03811115620010e357620010e36200104c565b620010f8601f8201601f191660200162001060565b8181528460208386010111156200110d575f80fd5b6200059a82602083016020870162001093565b5f805f805f60a0868803121562001135575f80fd5b620011408662001030565b602087810151919650906001600160401b03808211156200115f575f80fd5b818901915089601f83011262001173575f80fd5b8151818111156200118857620011886200104c565b8060051b6200119985820162001060565b918252838101850191858101908d841115620011b3575f80fd5b948601945b83861015620011dc57620011cc8662001030565b82529486019490860190620011b8565b60408d0151909a50955050505080831115620011f6575f80fd5b620012048a848b01620010b7565b955060608901519250808311156200121a575f80fd5b620012288a848b01620010b7565b945060808901519250808311156200123e575f80fd5b50506200124e88828901620010b7565b9150509295509295909350565b600181811c908216806200127057607f821691505b6020821081036200128f57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156200027d575f81815260208120601f850160051c81016020861015620012bd5750805b601f850160051c820191505b81811015620012de57828155600101620012c9565b505050505050565b81516001600160401b038111156200130257620013026200104c565b6200131a816200131384546200125b565b8462001295565b602080601f83116001811462001350575f8415620013385750858301515b5f19600386901b1c1916600185901b178555620012de565b5f85815260208120601f198616915b8281101562001380578886015182559484019460019091019084016200135f565b50858210156200139e57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201620013ea57620013ea620013c2565b5060010190565b5f81518084526200140a81602086016020860162001093565b601f01601f19169290920160200192915050565b602081525f620009cc6020830184620013f1565b805160208083015191908110156200128f575f1960209190910360031b1b16919050565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906200148a90830184620013f1565b9695505050505050565b5f60208284031215620014a5575f80fd5b81516001600160e01b031981168114620009cc575f80fd5b818103818111156200023d576200023d620013c2565b634e487b7160e01b5f52603160045260245ffd5b6001600160d01b038181168382160190808211156200150a576200150a620013c2565b5092915050565b6001600160d01b038281168282160390808211156200150a576200150a620013c2565b60805160a05160c05160e051610100516101205161014051612a98620015865f395f610e1601525f610de401525f61177801525f61175001525f6116ab01525f6116d501525f6116ff0152612a985ff3fe608060405234801561000f575f80fd5b50600436106101f2575f3560e01c80636352211e1161011457806395d89b41116100a9578063c3cda52011610079578063c3cda52014610471578063c87b56dd14610484578063d204c45e14610497578063e985e9c5146104aa578063f2fde38b146104bd575f80fd5b806395d89b41146104305780639ab24eb014610438578063a22cb4651461044b578063b88d4fde1461045e575f80fd5b806384b0196e116100e457806384b0196e146103db5780638da5cb5b146103f65780638e539e8c1461040757806391ddadf41461041a575f80fd5b80636352211e1461038557806370a0823114610398578063715018a6146103ab5780637ecebe00146103b3575f80fd5b80633a46b1a81161018a5780634f6ccce71161015a5780634f6ccce714610321578063587cde1e14610334578063593aa2831461035f5780635c19a95c14610372575f80fd5b80633a46b1a8146102be57806342842e0e146102d157806342966c68146102e45780634bf5d7e9146102f7575f80fd5b806318160ddd116101c557806318160ddd1461027357806323b872dd1461028557806326926d46146102985780632f745c59146102ab575f80fd5b806301ffc9a7146101f657806306fdde031461021e578063081812fc14610233578063095ea7b31461025e575b5f80fd5b610209610204366004612380565b6104d0565b60405190151581526020015b60405180910390f35b6102266104e0565b60405161021591906123e8565b6102466102413660046123fa565b61056f565b6040516001600160a01b039091168152602001610215565b61027161026c36600461242c565b610596565b005b6008545b604051908152602001610215565b610271610293366004612454565b6105a5565b6102716102a63660046123fa565b610633565b6102776102b936600461242c565b610647565b6102776102cc36600461242c565b6106aa565b6102716102df366004612454565b61071f565b6102716102f23660046123fa565b61073e565b60408051808201909152600e81526d06d6f64653d74696d657374616d760941b6020820152610226565b61027761032f3660046123fa565b610749565b61024661034236600461248d565b6001600160a01b039081165f908152600f60205260409020541690565b61027161036d36600461254b565b61079e565b61027161038036600461248d565b6107b0565b6102466103933660046123fa565b6107bb565b6102776103a636600461248d565b6107c5565b61027161080a565b6102776103c136600461248d565b6001600160a01b03165f908152600e602052604090205490565b6103e361081d565b604051610215979695949392919061258f565b600b546001600160a01b0316610246565b6102776104153660046123fa565b61085f565b60405165ffffffffffff42168152602001610215565b6102266108be565b61027761044636600461248d565b6108cd565b610271610459366004612623565b6108fc565b61027161046c36600461265c565b610907565b61027161047f3660046126d3565b61091e565b6102266104923660046123fa565b6109da565b6102716104a536600461272e565b6109e5565b6102096104b8366004612763565b610a17565b6102716104cb36600461248d565b610a44565b5f6104da82610a9b565b92915050565b60605f80546104ee90612794565b80601f016020809104026020016040519081016040528092919081815260200182805461051a90612794565b80156105655780601f1061053c57610100808354040283529160200191610565565b820191905f5260205f20905b81548152906001019060200180831161054857829003601f168201915b5050505050905090565b5f61057982610abf565b505f828152600460205260409020546001600160a01b03166104da565b6105a1828233610af7565b5050565b6001600160a01b0382166105d357604051633250574960e11b81525f60048201526024015b60405180910390fd5b5f6105df838333610b04565b9050836001600160a01b0316816001600160a01b03161461062d576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016105ca565b50505050565b61063b610b81565b61064481610bae565b50565b5f610651836107c5565b82106106825760405163295f44f760e21b81526001600160a01b0384166004820152602481018390526044016105ca565b506001600160a01b03919091165f908152600660209081526040808320938352929052205490565b5f4265ffffffffffff811683106106e557604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016105ca565b61070e6106f184610be6565b6001600160a01b0386165f90815260106020526040902090610c1c565b6001600160d01b0316949350505050565b61073983838360405180602001604052805f815250610907565b505050565b6105a15f8233610b04565b5f61075360085490565b821061077b5760405163295f44f760e21b81525f6004820152602481018390526044016105ca565b6008828154811061078e5761078e6127cc565b905f5260205f2001549050919050565b6107a6610b81565b6105a18282610ccc565b336105a18183610d1b565b5f6104da82610abf565b5f6001600160a01b0382166107ef576040516322718ad960e21b81525f60048201526024016105ca565b506001600160a01b03165f9081526003602052604090205490565b610812610b81565b61081b5f610d8c565b565b5f6060805f805f606061082e610ddd565b610836610e0f565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f4265ffffffffffff8116831061089a57604051637669fc0f60e11b81526004810184905265ffffffffffff821660248201526044016105ca565b6108ae6108a684610be6565b601190610c1c565b6001600160d01b03169392505050565b6060600180546104ee90612794565b6001600160a01b0381165f9081526010602052604081206108ed90610e3c565b6001600160d01b031692915050565b6105a1338383610e73565b6109128484846105a5565b61062d84848484610f11565b8342111561094257604051632341d78760e11b8152600481018590526024016105ca565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590525f906109bb906109b39060a00160405160208183030381529060405280519060200120611037565b858585611063565b90506109c7818761108f565b6109d18188610d1b565b50505050505050565b60606104da826110e1565b6109ed610b81565b601280545f91826109fd836127f4565b919050559050610a0d83826111e4565b6107398183610ccc565b6001600160a01b039182165f90815260056020908152604080832093909416825291909152205460ff1690565b610a4c610b81565b6001600160a01b038116610a7557604051631e4fbdf760e01b81525f60048201526024016105ca565b61064481610d8c565b5f610a89828461280c565b9392505050565b5f610a898284612833565b5f6001600160e01b03198216632483248360e11b14806104da57506104da826111fd565b5f818152600260205260408120546001600160a01b0316806104da57604051637e27328960e01b8152600481018490526024016105ca565b6107398383836001611221565b5f6001600160a01b0382161580610b2257506001600160a01b038416155b610b6e5760405162461bcd60e51b815260206004820152601c60248201527f54686973204e4654206973206e6f74207472616e7366657261626c650000000060448201526064016105ca565b610b79848484611325565b949350505050565b600b546001600160a01b0316331461081b5760405163118cdaa760e01b81523360048201526024016105ca565b5f610bba5f835f610b04565b90506001600160a01b0381166105a157604051637e27328960e01b8152600481018390526024016105ca565b5f65ffffffffffff821115610c18576040516306dfcc6560e41b815260306004820152602481018390526044016105ca565b5090565b81545f9081816005811115610c78575f610c3584611340565b610c3f9085612853565b5f8881526020902090915081015465ffffffffffff9081169087161015610c6857809150610c76565b610c73816001612866565b92505b505b5f610c8587878585611424565b90508015610cbf57610ca987610c9c600184612853565b5f91825260209091200190565b54600160301b90046001600160d01b0316610cc1565b5f5b979650505050505050565b5f828152600a60205260409020610ce382826128c6565b506040518281527ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce79060200160405180910390a15050565b6001600160a01b038281165f818152600f602052604080822080548686166001600160a01b0319821681179092559151919094169392849290917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46107398183610d8786611483565b61148d565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6060610e0a7f0000000000000000000000000000000000000000000000000000000000000000600c6115f6565b905090565b6060610e0a7f0000000000000000000000000000000000000000000000000000000000000000600d6115f6565b80545f908015610e6b57610e5583610c9c600184612853565b54600160301b90046001600160d01b0316610a89565b5f9392505050565b6001600160a01b038216610ea557604051630b61174360e31b81526001600160a01b03831660048201526024016105ca565b6001600160a01b038381165f81815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561062d57604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610f53903390889087908790600401612982565b6020604051808303815f875af1925050508015610f8d575060408051601f3d908101601f19168201909252610f8a918101906129be565b60015b610ff4573d808015610fba576040519150601f19603f3d011682016040523d82523d5f602084013e610fbf565b606091505b5080515f03610fec57604051633250574960e11b81526001600160a01b03851660048201526024016105ca565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461103057604051633250574960e11b81526001600160a01b03851660048201526024016105ca565b5050505050565b5f6104da61104361169f565b8360405161190160f01b8152600281019290925260228201526042902090565b5f805f80611073888888886117c8565b9250925092506110838282611890565b50909695505050505050565b6001600160a01b0382165f908152600e60205260409020805460018101909155818114610739576040516301d4b62360e61b81526001600160a01b0384166004820152602481018290526044016105ca565b60606110ec82610abf565b505f828152600a60205260408120805461110590612794565b80601f016020809104026020016040519081016040528092919081815260200182805461113190612794565b801561117c5780601f106111535761010080835404028352916020019161117c565b820191905f5260205f20905b81548152906001019060200180831161115f57829003601f168201915b505050505090505f61119860408051602081019091525f815290565b905080515f036111a9575092915050565b8151156111db5780826040516020016111c39291906129d9565b60405160208183030381529060405292505050919050565b610b7984611948565b6105a1828260405180602001604052805f8152506119b8565b5f6001600160e01b0319821663780e9d6360e01b14806104da57506104da826119ce565b808061123557506001600160a01b03821615155b156112f6575f61124484610abf565b90506001600160a01b038316158015906112705750826001600160a01b0316816001600160a01b031614155b801561128357506112818184610a17565b155b156112ac5760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016105ca565b81156112f45783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b50505f90815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b5f80611332858585611a1d565b9050610b7981866001611ae8565b5f815f0361134f57505f919050565b5f600161135b84611b5d565b901c6001901b9050600181848161137457611374612a07565b048201901c9050600181848161138c5761138c612a07565b048201901c905060018184816113a4576113a4612a07565b048201901c905060018184816113bc576113bc612a07565b048201901c905060018184816113d4576113d4612a07565b048201901c905060018184816113ec576113ec612a07565b048201901c9050600181848161140457611404612a07565b048201901c9050610a898182858161141e5761141e612a07565b04611bf0565b5f5b8183101561147b575f6114398484611c05565b5f8781526020902090915065ffffffffffff86169082015465ffffffffffff16111561146757809250611475565b611472816001612866565b93505b50611426565b509392505050565b5f6104da826107c5565b816001600160a01b0316836001600160a01b0316141580156114ae57505f81115b15610739576001600160a01b03831615611555576001600160a01b0383165f90815260106020526040812081906114f090610a906114eb86611c1f565b611c52565b6001600160d01b031691506001600160d01b03169150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161154a929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610739576001600160a01b0382165f908152601060205260408120819061158d90610a7e6114eb86611c1f565b6001600160d01b031691506001600160d01b03169150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516115e7929190918252602082015260400190565b60405180910390a25050505050565b606060ff83146116105761160983611c83565b90506104da565b81805461161c90612794565b80601f016020809104026020016040519081016040528092919081815260200182805461164890612794565b80156116935780601f1061166a57610100808354040283529160200191611693565b820191905f5260205f20905b81548152906001019060200180831161167657829003601f168201915b505050505090506104da565b5f306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156116f757507f000000000000000000000000000000000000000000000000000000000000000046145b1561172157507f000000000000000000000000000000000000000000000000000000000000000090565b610e0a604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561180157505f91506003905082611886565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611852573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b03811661187d57505f925060019150829050611886565b92505f91508190505b9450945094915050565b5f8260038111156118a3576118a3612a1b565b036118ac575050565b60018260038111156118c0576118c0612a1b565b036118de5760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156118f2576118f2612a1b565b036119135760405163fce698f760e01b8152600481018290526024016105ca565b600382600381111561192757611927612a1b565b036105a1576040516335e2f38360e21b8152600481018290526024016105ca565b606061195382610abf565b505f61196960408051602081019091525f815290565b90505f8151116119875760405180602001604052805f815250610a89565b8061199184611cc0565b6040516020016119a29291906129d9565b6040516020818303038152906040529392505050565b6119c28383611d50565b6107395f848484610f11565b5f6001600160e01b031982166380ac58cd60e01b14806119fe57506001600160e01b03198216635b5e139f60e01b145b806104da57506301ffc9a760e01b6001600160e01b03198316146104da565b5f80611a2a858585611db1565b90506001600160a01b038116611a8657611a8184600880545f838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611aa9565b846001600160a01b0316816001600160a01b031614611aa957611aa98185611ea3565b6001600160a01b038516611ac557611ac084611f30565b610b79565b846001600160a01b0316816001600160a01b031614610b7957610b798585611fd7565b6001600160a01b038316611b0a57611b076011610a7e6114eb84611c1f565b50505b6001600160a01b038216611b2c57611b296011610a906114eb84611c1f565b50505b6001600160a01b038381165f908152600f60205260408082205485841683529120546107399291821691168361148d565b5f80608083901c15611b7157608092831c92015b604083901c15611b8357604092831c92015b602083901c15611b9557602092831c92015b601083901c15611ba757601092831c92015b600883901c15611bb957600892831c92015b600483901c15611bcb57600492831c92015b600283901c15611bdd57600292831c92015b600183901c156104da5760010192915050565b5f818310611bfe5781610a89565b5090919050565b5f611c136002848418612a2f565b610a8990848416612866565b5f6001600160d01b03821115610c18576040516306dfcc6560e41b815260d06004820152602481018390526044016105ca565b5f80611c7642611c6e611c6488610e3c565b868863ffffffff16565b879190612025565b915091505b935093915050565b60605f611c8f83612032565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b60605f611ccc83612059565b60010190505f8167ffffffffffffffff811115611ceb57611ceb6124a6565b6040519080825280601f01601f191660200182016040528015611d15576020820181803683370190505b5090508181016020015b5f19016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084611d1f57509392505050565b6001600160a01b038216611d7957604051633250574960e11b81525f60048201526024016105ca565b5f611d8583835f610b04565b90506001600160a01b03811615610739576040516339e3563760e11b81525f60048201526024016105ca565b5f828152600260205260408120546001600160a01b0390811690831615611ddd57611ddd818486612130565b6001600160a01b03811615611e1757611df85f855f80611221565b6001600160a01b0381165f90815260036020526040902080545f190190555b6001600160a01b03851615611e45576001600160a01b0385165f908152600360205260409020805460010190555b5f8481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b5f611ead836107c5565b5f83815260076020526040902054909150808214611efe576001600160a01b0384165f9081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b505f9182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008545f90611f4190600190612853565b5f8381526009602052604081205460088054939450909284908110611f6857611f686127cc565b905f5260205f20015490508060088381548110611f8757611f876127cc565b5f918252602080832090910192909255828152600990915260408082208490558582528120556008805480611fbe57611fbe612a4e565b600190038181905f5260205f20015f9055905550505050565b5f6001611fe3846107c5565b611fed9190612853565b6001600160a01b039093165f908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b5f80611c76858585612194565b5f60ff8216601f8111156104da57604051632cd44ac360e21b815260040160405180910390fd5b5f8072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b83106120975772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106120c3576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106120e157662386f26fc10000830492506010015b6305f5e10083106120f9576305f5e100830492506008015b612710831061210d57612710830492506004015b6064831061211f576064830492506002015b600a83106104da5760010192915050565b61213b83838361230a565b610739576001600160a01b03831661216957604051637e27328960e01b8152600481018290526024016105ca565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016105ca565b82545f90819080156122b0575f6121b087610c9c600185612853565b60408051808201909152905465ffffffffffff808216808452600160301b9092046001600160d01b03166020840152919250908716101561220457604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff808816911603612250578461222788610c9c600186612853565b80546001600160d01b0392909216600160301b0265ffffffffffff9092169190911790556122a0565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d555f8d81529190912094519151909216600160301b029216919091179101555b602001519250839150611c7b9050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b029190931617920191909155905081611c7b565b5f6001600160a01b03831615801590610b795750826001600160a01b0316846001600160a01b0316148061234357506123438484610a17565b80610b795750505f908152600460205260409020546001600160a01b03908116911614919050565b6001600160e01b031981168114610644575f80fd5b5f60208284031215612390575f80fd5b8135610a898161236b565b5f5b838110156123b557818101518382015260200161239d565b50505f910152565b5f81518084526123d481602086016020860161239b565b601f01601f19169290920160200192915050565b602081525f610a8960208301846123bd565b5f6020828403121561240a575f80fd5b5035919050565b80356001600160a01b0381168114612427575f80fd5b919050565b5f806040838503121561243d575f80fd5b61244683612411565b946020939093013593505050565b5f805f60608486031215612466575f80fd5b61246f84612411565b925061247d60208501612411565b9150604084013590509250925092565b5f6020828403121561249d575f80fd5b610a8982612411565b634e487b7160e01b5f52604160045260245ffd5b5f67ffffffffffffffff808411156124d4576124d46124a6565b604051601f8501601f19908116603f011681019082821181831017156124fc576124fc6124a6565b81604052809350858152868686011115612514575f80fd5b858560208301375f602087830101525050509392505050565b5f82601f83011261253c575f80fd5b610a89838335602085016124ba565b5f806040838503121561255c575f80fd5b82359150602083013567ffffffffffffffff811115612579575f80fd5b6125858582860161252d565b9150509250929050565b60ff60f81b881681525f602060e0818401526125ae60e084018a6123bd565b83810360408501526125c0818a6123bd565b606085018990526001600160a01b038816608086015260a0850187905284810360c086015285518082528387019250908301905f5b81811015612611578351835292840192918401916001016125f5565b50909c9b505050505050505050505050565b5f8060408385031215612634575f80fd5b61263d83612411565b915060208301358015158114612651575f80fd5b809150509250929050565b5f805f806080858703121561266f575f80fd5b61267885612411565b935061268660208601612411565b925060408501359150606085013567ffffffffffffffff8111156126a8575f80fd5b8501601f810187136126b8575f80fd5b6126c7878235602084016124ba565b91505092959194509250565b5f805f805f8060c087890312156126e8575f80fd5b6126f187612411565b95506020870135945060408701359350606087013560ff81168114612714575f80fd5b9598949750929560808101359460a0909101359350915050565b5f806040838503121561273f575f80fd5b61274883612411565b9150602083013567ffffffffffffffff811115612579575f80fd5b5f8060408385031215612774575f80fd5b61277d83612411565b915061278b60208401612411565b90509250929050565b600181811c908216806127a857607f821691505b6020821081036127c657634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201612805576128056127e0565b5060010190565b6001600160d01b0381811683821601908082111561282c5761282c6127e0565b5092915050565b6001600160d01b0382811682821603908082111561282c5761282c6127e0565b818103818111156104da576104da6127e0565b808201808211156104da576104da6127e0565b601f821115610739575f81815260208120601f850160051c8101602086101561289f5750805b601f850160051c820191505b818110156128be578281556001016128ab565b505050505050565b815167ffffffffffffffff8111156128e0576128e06124a6565b6128f4816128ee8454612794565b84612879565b602080601f831160018114612927575f84156129105750858301515b5f19600386901b1c1916600185901b1785556128be565b5f85815260208120601f198616915b8281101561295557888601518255948401946001909101908401612936565b508582101561297257878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b03858116825284166020820152604081018390526080606082018190525f906129b4908301846123bd565b9695505050505050565b5f602082840312156129ce575f80fd5b8151610a898161236b565b5f83516129ea81846020880161239b565b8351908301906129fe81836020880161239b565b01949350505050565b634e487b7160e01b5f52601260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b5f82612a4957634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52603160045260245ffdfea26469706673582212200c0ce1d57f32625640143bcfef93bc401e8fada9253c24e2e9e63164c7cff04564736f6c63430008140033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724'

export const GOV_ABI = [
  {
    inputs: [
      {
        internalType: 'contract IVotes',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_manifesto',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'uint48',
        name: '_votingDelay',
        type: 'uint48',
      },
      {
        internalType: 'uint32',
        name: '_votingPeriod',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: '_votingThreshold',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_quorum',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'CheckpointUnorderedInsertion',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
    ],
    name: 'GovernorAlreadyCastVote',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'GovernorAlreadyQueuedProposal',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorDisabledDeposit',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'proposer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'votes',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'threshold',
        type: 'uint256',
      },
    ],
    name: 'GovernorInsufficientProposerVotes',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'targets',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'calldatas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'values',
        type: 'uint256',
      },
    ],
    name: 'GovernorInvalidProposalLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'quorumNumerator',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'quorumDenominator',
        type: 'uint256',
      },
    ],
    name: 'GovernorInvalidQuorumFraction',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
    ],
    name: 'GovernorInvalidSignature',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorInvalidVoteType',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'votingPeriod',
        type: 'uint256',
      },
    ],
    name: 'GovernorInvalidVotingPeriod',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'GovernorNonexistentProposal',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'GovernorNotQueuedProposal',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'GovernorOnlyExecutor',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'GovernorOnlyProposer',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GovernorQueueNotImplemented',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'proposer',
        type: 'address',
      },
    ],
    name: 'GovernorRestrictedProposer',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'enum IGovernor.ProposalState',
        name: 'current',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'expectedStates',
        type: 'bytes32',
      },
    ],
    name: 'GovernorUnexpectedProposalState',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'currentNonce',
        type: 'uint256',
      },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidShortString',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QueueEmpty',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QueueFull',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'StringTooLong',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'EIP712DomainChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'cid',
        type: 'string',
      },
    ],
    name: 'ManifestoUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'ProposalCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'proposer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'string[]',
        name: 'signatures',
        type: 'string[]',
      },
      {
        indexed: false,
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'voteStart',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'voteEnd',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
    ],
    name: 'ProposalCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'ProposalExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'etaSeconds',
        type: 'uint256',
      },
    ],
    name: 'ProposalQueued',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldProposalThreshold',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newProposalThreshold',
        type: 'uint256',
      },
    ],
    name: 'ProposalThresholdSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldQuorumNumerator',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newQuorumNumerator',
        type: 'uint256',
      },
    ],
    name: 'QuorumNumeratorUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'weight',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
    ],
    name: 'VoteCast',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'weight',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'VoteCastWithParams',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldVotingDelay',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newVotingDelay',
        type: 'uint256',
      },
    ],
    name: 'VotingDelaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldVotingPeriod',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newVotingPeriod',
        type: 'uint256',
      },
    ],
    name: 'VotingPeriodSet',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BALLOT_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'COUNTING_MODE',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'EXTENDED_BALLOT_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'descriptionHash',
        type: 'bytes32',
      },
    ],
    name: 'cancel',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
    ],
    name: 'castVote',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'castVoteBySig',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
    ],
    name: 'castVoteWithReason',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'castVoteWithReasonAndParams',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'support',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'voter',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'reason',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'castVoteWithReasonAndParamsBySig',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'clock',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      {
        internalType: 'bytes1',
        name: 'fields',
        type: 'bytes1',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'verifyingContract',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[]',
        name: 'extensions',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'descriptionHash',
        type: 'bytes32',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'getVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'params',
        type: 'bytes',
      },
    ],
    name: 'getVotesWithParams',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasVoted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'descriptionHash',
        type: 'bytes32',
      },
    ],
    name: 'hashProposal',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'manifesto',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'proposalDeadline',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'proposalEta',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'proposalNeedsQueuing',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'proposalProposer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'proposalSnapshot',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proposalThreshold',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'proposalVotes',
    outputs: [
      {
        internalType: 'uint256',
        name: 'againstVotes',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'forVotes',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'abstainVotes',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
    ],
    name: 'propose',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes[]',
        name: 'calldatas',
        type: 'bytes[]',
      },
      {
        internalType: 'bytes32',
        name: 'descriptionHash',
        type: 'bytes32',
      },
    ],
    name: 'queue',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'blockNumber',
        type: 'uint256',
      },
    ],
    name: 'quorum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'quorumDenominator',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timepoint',
        type: 'uint256',
      },
    ],
    name: 'quorumNumerator',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'quorumNumerator',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'relay',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'cid',
        type: 'string',
      },
    ],
    name: 'setManifesto',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newProposalThreshold',
        type: 'uint256',
      },
    ],
    name: 'setProposalThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: 'newVotingDelay',
        type: 'uint48',
      },
    ],
    name: 'setVotingDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'newVotingPeriod',
        type: 'uint32',
      },
    ],
    name: 'setVotingPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'proposalId',
        type: 'uint256',
      },
    ],
    name: 'state',
    outputs: [
      {
        internalType: 'enum IGovernor.ProposalState',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract IERC5805',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newQuorumNumerator',
        type: 'uint256',
      },
    ],
    name: 'updateQuorumNumerator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'votingDelay',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'votingPeriod',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]
export const GOV_BYTECODE =
  '0x61018060405234801562000011575f80fd5b5060405162004789380380620047898339810160408190526200003491620007c4565b808785858589806200005a6040805180820190915260018152603160f81b602082015290565b62000066825f62000177565b610120526200007781600162000177565b61014052815160208084019190912060e052815190820120610100524660a0526200010460e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c05260036200011b828262000916565b5062000129905083620001af565b620001348262000215565b6200013f81620002ba565b5050506001600160a01b0316610160526200015a81620002fb565b50600b62000169878262000916565b505050505050505062000a72565b5f60208351101562000196576200018e836200039a565b9050620001a9565b81620001a3848262000916565b5060ff90505b92915050565b6008546040805165ffffffffffff928316815291831660208301527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a16008805465ffffffffffff191665ffffffffffff92909216919091179055565b8063ffffffff165f03620002435760405163f1cfbf0560e01b81525f60048201526024015b60405180910390fd5b6008546040805163ffffffff66010000000000009093048316815291831660208301527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a16008805463ffffffff90921666010000000000000263ffffffff60301b19909216919091179055565b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600755565b6064808211156200032a5760405163243e544560e01b815260048101839052602481018290526044016200023a565b5f62000335620003dc565b90506200035a62000345620003f7565b620003508562000478565b600a9190620004b1565b505060408051828152602081018590527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a1505050565b5f80829050601f81511115620003c7578260405163305a27a960e01b81526004016200023a9190620009de565b8051620003d48262000a12565b179392505050565b5f620003e9600a620004cd565b6001600160d01b0316905090565b5f620004036101605190565b6001600160a01b03166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156200045f575060408051601f3d908101601f191682019092526200045c9181019062000a36565b60015b62000473576200046e6200051a565b905090565b919050565b5f6001600160d01b03821115620004ad576040516306dfcc6560e41b815260d06004820152602481018390526044016200023a565b5090565b5f80620004c085858562000526565b915091505b935093915050565b80545f9080156200051157620004f783620004ea60018462000a52565b5f91825260209091200190565b54660100000000000090046001600160d01b031662000513565b5f5b9392505050565b5f6200046e43620006b4565b82545f908190801562000656575f6200054687620004ea60018562000a52565b60408051808201909152905465ffffffffffff80821680845266010000000000009092046001600160d01b0316602084015291925090871610156200059e57604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff808816911603620005f25784620005c588620004ea60018662000a52565b80546001600160d01b039290921666010000000000000265ffffffffffff90921691909117905562000645565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d555f8d815291909120945191519092166601000000000000029216919091179101555b602001519250839150620004c59050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a8152918220955192519093166601000000000000029190931617920191909155905081620004c5565b5f65ffffffffffff821115620004ad576040516306dfcc6560e41b815260306004820152602481018390526044016200023a565b634e487b7160e01b5f52604160045260245ffd5b5f5b8381101562000718578181015183820152602001620006fe565b50505f910152565b5f82601f83011262000730575f80fd5b81516001600160401b03808211156200074d576200074d620006e8565b604051601f8301601f19908116603f01168101908282118183101715620007785762000778620006e8565b8160405283815286602085880101111562000791575f80fd5b620007a4846020830160208901620006fc565b9695505050505050565b805165ffffffffffff8116811462000473575f80fd5b5f805f805f805f60e0888a031215620007db575f80fd5b87516001600160a01b0381168114620007f2575f80fd5b60208901519097506001600160401b03808211156200080f575f80fd5b6200081d8b838c0162000720565b975060408a015191508082111562000833575f80fd5b50620008428a828b0162000720565b9550506200085360608901620007ae565b9350608088015163ffffffff811681146200086c575f80fd5b8093505060a0880151915060c0880151905092959891949750929550565b600181811c908216806200089f57607f821691505b602082108103620008be57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000911575f81815260208120601f850160051c81016020861015620008ec5750805b601f850160051c820191505b818110156200090d57828155600101620008f8565b5050505b505050565b81516001600160401b03811115620009325762000932620006e8565b6200094a816200094384546200088a565b84620008c4565b602080601f83116001811462000980575f8415620009685750858301515b5f19600386901b1c1916600185901b1785556200090d565b5f85815260208120601f198616915b82811015620009b0578886015182559484019460019091019084016200098f565b5085821015620009ce57878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b602081525f8251806020840152620009fe816040850160208701620006fc565b601f01601f19169190910160400192915050565b80516020808301519190811015620008be575f1960209190910360031b1b16919050565b5f6020828403121562000a47575f80fd5b6200051382620007ae565b81810381811115620001a957634e487b7160e01b5f52601160045260245ffd5b60805160a05160c05160e05161010051610120516101405161016051613c9f62000aea5f395f818161098d01528181610e400152818161138301528181611fa4015261218e01525f611f7101525f611f4501525f6123ad01525f61238501525f6122e001525f61230a01525f6123340152613c9f5ff3fe60806040526004361061028e575f3560e01c80637d5e81e211610155578063c01f9e37116100be578063e540d01d11610078578063e540d01d146108d8578063eb9019d4146108f7578063ece40cc114610916578063f23a6e6114610935578063f8ce560a14610960578063fc0c546a1461097f575f80fd5b8063c01f9e37146107fb578063c28bc2fa1461081a578063c59057e41461082d578063dd4e2ba51461084c578063deaaa7cc14610891578063e2f3dce0146108c4575f80fd5b80639a802a6d1161010f5780639a802a6d14610734578063a7713a7014610753578063a9a9529414610767578063ab58fb8e14610786578063b58131b0146107bc578063bc197c81146107d0575f80fd5b80637d5e81e21461065d5780637ecebe001461067c57806384b0196e146106b05780638ff262e3146106d757806391ddadf4146106f657806397c3d33414610721575f80fd5b80633e4f49e6116101f757806356781388116101b157806356781388146105a35780635b8d0e0d146105c25780635f398a14146105e157806360c4247f14610600578063790518871461061f5780637b3c71d31461063e575f80fd5b80633e4f49e61461048057806343859632146104ac578063452115d6146104f45780634bf5d7e914610513578063544ffc9c1461052757806354fd4d501461057a575f80fd5b8063160cbed711610248578063160cbed7146103c95780631985ba76146103e85780632656227d146104075780632d63f6931461041a5780632fe3e261146104395780633932abb11461046c575f80fd5b806301ffc9a71461029b57806302a251a3146102cf57806306f3f9e6146102fa57806306fdde0314610319578063143489d01461033a578063150b7a0214610386575f80fd5b3661029757005b005b5f80fd5b3480156102a6575f80fd5b506102ba6102b5366004612c47565b6109b1565b60405190151581526020015b60405180910390f35b3480156102da575f80fd5b50600854600160301b900463ffffffff165b6040519081526020016102c6565b348015610305575f80fd5b50610295610314366004612c6e565b610a07565b348015610324575f80fd5b5061032d610a1b565b6040516102c69190612cd2565b348015610345575f80fd5b5061036e610354366004612c6e565b5f908152600460205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016102c6565b348015610391575f80fd5b506103b06103a0366004612db6565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016102c6565b3480156103d4575f80fd5b506102ec6103e3366004612f78565b610aab565b3480156103f3575f80fd5b50610295610402366004613001565b610ae9565b6102ec610415366004612f78565b610b38565b348015610425575f80fd5b506102ec610434366004612c6e565b610c68565b348015610444575f80fd5b506102ec7f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a81181565b348015610477575f80fd5b506102ec610c88565b34801561048b575f80fd5b5061049f61049a366004612c6e565b610c9a565b6040516102c69190613066565b3480156104b7575f80fd5b506102ba6104c6366004613074565b5f8281526009602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b3480156104ff575f80fd5b506102ec61050e366004612f78565b610dd0565b34801561051e575f80fd5b5061032d610e3c565b348015610532575f80fd5b5061055f610541366004612c6e565b5f908152600960205260409020805460018201546002909201549092565b604080519384526020840192909252908201526060016102c6565b348015610585575f80fd5b506040805180820190915260018152603160f81b602082015261032d565b3480156105ae575f80fd5b506102ec6105bd3660046130ae565b610efc565b3480156105cd575f80fd5b506102ec6105dc366004613113565b610f23565b3480156105ec575f80fd5b506102ec6105fb3660046131c3565b61107f565b34801561060b575f80fd5b506102ec61061a366004612c6e565b6110d2565b34801561062a575f80fd5b50610295610639366004613253565b61115e565b348015610649575f80fd5b506102ec61065836600461326e565b61116f565b348015610668575f80fd5b506102ec6106773660046132c3565b6111b5565b348015610687575f80fd5b506102ec61069636600461335c565b6001600160a01b03165f9081526002602052604090205490565b3480156106bb575f80fd5b506106c461126f565b6040516102c697969594939291906133ae565b3480156106e2575f80fd5b506102ec6106f136600461341d565b6112b1565b348015610701575f80fd5b5061070a611380565b60405165ffffffffffff90911681526020016102c6565b34801561072c575f80fd5b5060646102ec565b34801561073f575f80fd5b506102ec61074e366004613468565b611407565b34801561075e575f80fd5b506102ec611413565b348015610772575f80fd5b506102ba610781366004612c6e565b505f90565b348015610791575f80fd5b506102ec6107a0366004612c6e565b5f9081526004602052604090206001015465ffffffffffff1690565b3480156107c7575f80fd5b506102ec61142c565b3480156107db575f80fd5b506103b06107ea3660046134ba565b63bc197c8160e01b95945050505050565b348015610806575f80fd5b506102ec610815366004612c6e565b611436565b610295610828366004613542565b611478565b348015610838575f80fd5b506102ec610847366004612f78565b6114f4565b348015610857575f80fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e9082015261032d565b34801561089c575f80fd5b506102ec7ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d781565b3480156108cf575f80fd5b5061032d61152d565b3480156108e3575f80fd5b506102956108f236600461357f565b6115b9565b348015610902575f80fd5b506102ec6109113660046135a2565b6115ca565b348015610921575f80fd5b50610295610930366004612c6e565b6115f0565b348015610940575f80fd5b506103b061094f3660046135ca565b63f23a6e6160e01b95945050505050565b34801561096b575f80fd5b506102ec61097a366004612c6e565b611601565b34801561098a575f80fd5b507f000000000000000000000000000000000000000000000000000000000000000061036e565b5f6001600160e01b031982166332a2ad4360e11b14806109e157506001600160e01b03198216630271189760e51b145b806109fc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b905090565b610a0f61160b565b610a1881611642565b50565b606060038054610a2a90613629565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5690613629565b8015610aa15780601f10610a7857610100808354040283529160200191610aa1565b820191905f5260205f20905b815481529060010190602001808311610a8457829003601f168201915b5050505050905090565b5f80610ab9868686866114f4565b9050610ace81610ac960046116d7565b6116f9565b505f604051634844252360e11b815260040160405180910390fd5b610af161160b565b600b610afd82826136ab565b507f224d2c7fdc536a5b2a879a07352ceed6752e43069abb2a8444725679666c372e81604051610b2d9190612cd2565b60405180910390a150565b5f80610b46868686866114f4565b9050610b6681610b5660056116d7565b610b6060046116d7565b176116f9565b505f818152600460205260409020805460ff60f01b1916600160f01b17905530610b8d3090565b6001600160a01b031614610c1e575f5b8651811015610c1c57306001600160a01b0316878281518110610bc257610bc2613766565b60200260200101516001600160a01b031603610c0c57610c0c858281518110610bed57610bed613766565b602002602001015180519060200120600561173690919063ffffffff16565b610c158161378e565b9050610b9d565b505b610c2b81878787876117a6565b6040518181527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f906020015b60405180910390a195945050505050565b5f90815260046020526040902054600160a01b900465ffffffffffff1690565b5f610a0260085465ffffffffffff1690565b5f818152600460205260408120805460ff600160f01b8204811691600160f81b9004168115610cce57506007949350505050565b8015610cdf57506002949350505050565b5f610ce986610c68565b9050805f03610d1357604051636ad0607560e01b8152600481018790526024015b60405180910390fd5b5f610d1c611380565b65ffffffffffff169050808210610d3957505f9695505050505050565b5f610d4388611436565b9050818110610d5a57506001979650505050505050565b610d6388611881565b1580610d8257505f888152600960205260409020805460019091015411155b15610d9557506003979650505050505050565b5f8881526004602052604090206001015465ffffffffffff165f03610dc257506004979650505050505050565b506005979650505050505050565b5f80610dde868686866114f4565b9050610ded81610ac95f6116d7565b505f818152600460205260409020546001600160a01b03163314610e265760405163233d98e360e01b8152336004820152602401610d0a565b610e32868686866118b7565b9695505050505050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634bf5d7e96040518163ffffffff1660e01b81526004015f60405180830381865afa925050508015610ebb57506040513d5f823e601f3d908101601f19168201604052610eb891908101906137a6565b60015b610ef7575060408051808201909152601d81527f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000602082015290565b919050565b5f80339050610f1b84828560405180602001604052805f815250611966565b949350505050565b5f8061100487610ffe7f3e83946653575f9a39005e1545185629e92736b7528ab20ca3816f315424a8118c8c8c610f768e6001600160a01b03165f90815260026020526040902080546001810190915590565b8d8d604051610f8692919061380e565b60405180910390208c80519060200120604051602001610fe39796959493929190968752602087019590955260ff9390931660408601526001600160a01b03919091166060850152608084015260a083015260c082015260e00190565b60405160208183030381529060405280519060200120611990565b856119bc565b90508061102f576040516394ab6c0760e01b81526001600160a01b0388166004820152602401610d0a565b61107289888a89898080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152508b9250611a11915050565b9998505050505050505050565b5f803390506110c787828888888080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152508a9250611a11915050565b979650505050505050565b600a80545f9182906110e560018461381d565b815481106110f5576110f5613766565b5f918252602090912001805490915065ffffffffffff811690600160301b90046001600160d01b0316858211611137576001600160d01b031695945050505050565b61114b61114387611aeb565b600a90611b21565b6001600160d01b03169695505050505050565b61116661160b565b610a1881611bd0565b5f80339050610e3286828787878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061196692505050565b5f336111c18184611c36565b6111e95760405163d9b3955760e01b81526001600160a01b0382166004820152602401610d0a565b5f61120f8260016111f8611380565b6112029190613830565b65ffffffffffff166115ca565b90505f61121a61142c565b90508082101561125657604051636121770b60e11b81526001600160a01b03841660048201526024810183905260448101829052606401610d0a565b6112638888888887611d24565b98975050505050505050565b5f6060805f805f6060611280611f3e565b611288611f6a565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b5f8061133b84610ffe7ff2aad550cf55f045cb27e9c559f9889fdfb6e6cdaa032301d6ea397784ae51d78989896113048b6001600160a01b03165f90815260026020526040902080546001810190915590565b60408051602081019690965285019390935260ff90911660608401526001600160a01b0316608083015260a082015260c001610fe3565b905080611366576040516394ab6c0760e01b81526001600160a01b0385166004820152602401610d0a565b610e3286858760405180602001604052805f815250611966565b5f7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166391ddadf46040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156113fb575060408051601f3d908101601f191682019092526113f891810190613856565b60015b610ef757610a02611f97565b5f610f1b848484611fa1565b5f61141e600a612034565b6001600160d01b0316905090565b5f610a0260075490565b5f8181526004602052604081205461146a90600160d01b810463ffffffff1690600160a01b900465ffffffffffff16613871565b65ffffffffffff1692915050565b61148061160b565b5f80856001600160a01b031685858560405161149d92919061380e565b5f6040518083038185875af1925050503d805f81146114d7576040519150601f19603f3d011682016040523d82523d5f602084013e6114dc565b606091505b50915091506114eb828261206b565b50505050505050565b5f8484848460405160200161150c949392919061391a565b60408051601f19818403018152919052805160209091012095945050505050565b600b805461153a90613629565b80601f016020809104026020016040519081016040528092919081815260200182805461156690613629565b80156115b15780601f10611588576101008083540402835291602001916115b1565b820191905f5260205f20905b81548152906001019060200180831161159457829003601f168201915b505050505081565b6115c161160b565b610a1881612087565b5f6115e983836115e460408051602081019091525f815290565b611fa1565b9392505050565b6115f861160b565b610a1881612123565b5f6109fc82612164565b30331461162d576040516347096e4760e01b8152336004820152602401610d0a565b565b8061163a600561220b565b0361162f5750565b60648082111561166f5760405163243e544560e01b81526004810183905260248101829052604401610d0a565b5f611678611413565b9050611697611685611380565b61168e85612287565b600a91906122ba565b505060408051828152602081018590527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a1505050565b5f8160078111156116ea576116ea613032565b600160ff919091161b92915050565b5f8061170484610c9a565b90505f83611711836116d7565b16036115e9578381846040516331b75e4d60e01b8152600401610d0a93929190613964565b81546001600160801b03600160801b82048116918116600183019091160361177157604051638acb5f2760e01b815260040160405180910390fd5b6001600160801b038082165f90815260018086016020526040909120939093558354919092018216600160801b029116179055565b5f5b8451811015611879575f808683815181106117c5576117c5613766565b60200260200101516001600160a01b03168684815181106117e8576117e8613766565b602002602001015186858151811061180257611802613766565b60200260200101516040516118179190613986565b5f6040518083038185875af1925050503d805f8114611851576040519150601f19603f3d011682016040523d82523d5f602084013e611856565b606091505b5091509150611865828261206b565b505050806118729061378e565b90506117a8565b505050505050565b5f818152600960205260408120600281015460018201546118a291906139a1565b6118ae61097a85610c68565b11159392505050565b5f806118c5868686866114f4565b9050611913816118d560076116d7565b6118df60066116d7565b6118e960026116d7565b60016118f66007826139b4565b611901906002613aad565b61190b919061381d565b1818186116f9565b505f818152600460205260409081902080546001600160f81b0316600160f81b179055517f789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c90610c579083815260200190565b5f6119878585858561198260408051602081019091525f815290565b611a11565b95945050505050565b5f6109fc61199c6122d4565b8360405161190160f01b8152600281019290925260228201526042902090565b5f805f6119c985856123fd565b5090925090505f8160038111156119e2576119e2613032565b148015611a005750856001600160a01b0316826001600160a01b0316145b80610e325750610e32868686612446565b5f611a2086610ac960016116d7565b505f611a3586611a2f89610c68565b85611fa1565b9050611a44878787848761251c565b82515f03611a9857856001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda488878488604051611a8b9493929190613abb565b60405180910390a2610e32565b856001600160a01b03167fe2babfbac5889a709b63bb7f598b324e08bc5a4fb9ec647fb3cbc9ec07eb87128887848888604051611ad9959493929190613ae2565b60405180910390a29695505050505050565b5f65ffffffffffff821115611b1d576040516306dfcc6560e41b81526030600482015260248101839052604401610d0a565b5090565b81545f9081816005811115611b7d575f611b3a8461260e565b611b44908561381d565b5f8881526020902090915081015465ffffffffffff9081169087161015611b6d57809150611b7b565b611b788160016139a1565b92505b505b5f611b8a878785856126f2565b90508015611bc457611bae87611ba160018461381d565b5f91825260209091200190565b54600160301b90046001600160d01b03166110c7565b5f979650505050505050565b6008546040805165ffffffffffff928316815291831660208301527fc565b045403dc03c2eea82b81a0465edad9e2e7fc4d97e11421c209da93d7a93910160405180910390a16008805465ffffffffffff191665ffffffffffff92909216919091179055565b80515f906034811015611c4d5760019150506109fc565b82810160131901516001600160a01b031981166b046e0e4dee0dee6cae47a60f60a31b14611c80576001925050506109fc565b5f80611c8d60288561381d565b90505b83811015611d03575f80611cc3888481518110611caf57611caf613766565b01602001516001600160f81b031916612751565b9150915081611cdb57600196505050505050506109fc565b8060ff166004856001600160a01b0316901b179350505080611cfc9061378e565b9050611c90565b50856001600160a01b0316816001600160a01b031614935050505092915050565b5f611d3886868686805190602001206114f4565b905084518651141580611d4d57508351865114155b80611d5757508551155b15611d8c57855184518651604051630447b05d60e41b8152600481019390935260248301919091526044820152606401610d0a565b5f81815260046020526040902054600160a01b900465ffffffffffff1615611dd55780611db882610c9a565b6040516331b75e4d60e01b8152610d0a9291905f90600401613964565b5f611dde610c88565b611de6611380565b65ffffffffffff16611df891906139a1565b90505f611e1260085463ffffffff600160301b9091041690565b5f84815260046020526040902080546001600160a01b0319166001600160a01b038716178155909150611e4483611aeb565b815465ffffffffffff91909116600160a01b0265ffffffffffff60a01b19909116178155611e71826127e1565b815463ffffffff91909116600160d01b0263ffffffff60d01b1990911617815588517f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e090859087908c908c906001600160401b03811115611ed457611ed4612cfa565b604051908082528060200260200182016040528015611f0757816020015b6060815260200190600190039081611ef25790505b508c89611f148a826139a1565b8e604051611f2a99989796959493929190613b1b565b60405180910390a150505095945050505050565b6060610a027f00000000000000000000000000000000000000000000000000000000000000005f612811565b6060610a027f00000000000000000000000000000000000000000000000000000000000000006001612811565b5f610a0243611aeb565b5f7f0000000000000000000000000000000000000000000000000000000000000000604051630748d63560e31b81526001600160a01b038681166004830152602482018690529190911690633a46b1a890604401602060405180830381865afa158015612010573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610f1b9190613bf0565b80545f9080156120635761204d83611ba160018461381d565b54600160301b90046001600160d01b03166115e9565b5f9392505050565b6060826120805761207b826128ba565b6109fc565b50806109fc565b8063ffffffff165f036120af5760405163f1cfbf0560e01b81525f6004820152602401610d0a565b6008546040805163ffffffff600160301b9093048316815291831660208301527f7e3f7f0708a84de9203036abaa450dccc85ad5ff52f78c170f3edb55cf5e8828910160405180910390a16008805463ffffffff909216600160301b0269ffffffff00000000000019909216919091179055565b60075460408051918252602082018390527fccb45da8d5717e6c4544694297c4ba5cf151d455c9bb0ed4fc7a38411bc05461910160405180910390a1600755565b5f6064612170836110d2565b604051632394e7a360e21b8152600481018590526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690638e539e8c90602401602060405180830381865afa1580156121d3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121f79190613bf0565b6122019190613c07565b6109fc9190613c32565b80545f906001600160801b0380821691600160801b9004168103612242576040516375e52f4f60e01b815260040160405180910390fd5b6001600160801b038181165f908152600185810160205260408220805492905585546fffffffffffffffffffffffffffffffff19169301909116919091179092555090565b5f6001600160d01b03821115611b1d576040516306dfcc6560e41b815260d0600482015260248101839052604401610d0a565b5f806122c78585856128e3565b915091505b935093915050565b5f306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561232c57507f000000000000000000000000000000000000000000000000000000000000000046145b1561235657507f000000000000000000000000000000000000000000000000000000000000000090565b610a02604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f805f8351604103612434576020840151604085015160608601515f1a61242688828585612a59565b95509550955050505061243f565b505081515f91506002905b9250925092565b5f805f856001600160a01b03168585604051602401612466929190613c51565b60408051601f198184030181529181526020820180516001600160e01b0316630b135d3f60e11b1790525161249b9190613986565b5f60405180830381855afa9150503d805f81146124d3576040519150601f19603f3d011682016040523d82523d5f602084013e6124d8565b606091505b50915091508180156124ec57506020815110155b8015610e3257508051630b135d3f60e11b906125119083016020908101908401613bf0565b149695505050505050565b5f8581526009602090815260408083206001600160a01b0388168452600381019092529091205460ff161561256f576040516371c6af4960e01b81526001600160a01b0386166004820152602401610d0a565b6001600160a01b0385165f9081526003820160205260409020805460ff1916600117905560ff84166125b85782815f015f8282546125ad91906139a1565b909155506118799050565b5f1960ff8516016125d65782816001015f8282546125ad91906139a1565b60011960ff8516016125f55782816002015f8282546125ad91906139a1565b6040516303599be160e11b815260040160405180910390fd5b5f815f0361261d57505f919050565b5f600161262984612b21565b901c6001901b9050600181848161264257612642613c1e565b048201901c9050600181848161265a5761265a613c1e565b048201901c9050600181848161267257612672613c1e565b048201901c9050600181848161268a5761268a613c1e565b048201901c905060018184816126a2576126a2613c1e565b048201901c905060018184816126ba576126ba613c1e565b048201901c905060018184816126d2576126d2613c1e565b048201901c90506115e9818285816126ec576126ec613c1e565b04612bb4565b5f5b81831015612749575f6127078484612bc9565b5f8781526020902090915065ffffffffffff86169082015465ffffffffffff16111561273557809250612743565b6127408160016139a1565b93505b506126f4565b509392505050565b5f8060f883901c602f8111801561276b5750603a8160ff16105b1561278057600194602f199091019350915050565b8060ff166040108015612796575060478160ff16105b156127ab576001946036199091019350915050565b8060ff1660601080156127c1575060678160ff16105b156127d6576001946056199091019350915050565b505f93849350915050565b5f63ffffffff821115611b1d576040516306dfcc6560e41b81526020600482015260248101839052604401610d0a565b606060ff831461282b5761282483612be3565b90506109fc565b81805461283790613629565b80601f016020809104026020016040519081016040528092919081815260200182805461286390613629565b80156128ae5780601f10612885576101008083540402835291602001916128ae565b820191905f5260205f20905b81548152906001019060200180831161289157829003601f168201915b505050505090506109fc565b8051156128ca5780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b82545f90819080156129ff575f6128ff87611ba160018561381d565b60408051808201909152905465ffffffffffff808216808452600160301b9092046001600160d01b03166020840152919250908716101561295357604051632520601d60e01b815260040160405180910390fd5b805165ffffffffffff80881691160361299f578461297688611ba160018661381d565b80546001600160d01b0392909216600160301b0265ffffffffffff9092169190911790556129ef565b6040805180820190915265ffffffffffff80881682526001600160d01b0380881660208085019182528b54600181018d555f8d81529190912094519151909216600160301b029216919091179101555b6020015192508391506122cc9050565b50506040805180820190915265ffffffffffff80851682526001600160d01b0380851660208085019182528854600181018a555f8a815291822095519251909316600160301b0291909316179201919091559050816122cc565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115612a9257505f91506003905082612b17565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015612ae3573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116612b0e57505f925060019150829050612b17565b92505f91508190505b9450945094915050565b5f80608083901c15612b3557608092831c92015b604083901c15612b4757604092831c92015b602083901c15612b5957602092831c92015b601083901c15612b6b57601092831c92015b600883901c15612b7d57600892831c92015b600483901c15612b8f57600492831c92015b600283901c15612ba157600292831c92015b600183901c156109fc5760010192915050565b5f818310612bc257816115e9565b5090919050565b5f612bd76002848418613c32565b6115e9908484166139a1565b60605f612bef83612c20565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b5f60ff8216601f8111156109fc57604051632cd44ac360e21b815260040160405180910390fd5b5f60208284031215612c57575f80fd5b81356001600160e01b0319811681146115e9575f80fd5b5f60208284031215612c7e575f80fd5b5035919050565b5f5b83811015612c9f578181015183820152602001612c87565b50505f910152565b5f8151808452612cbe816020860160208601612c85565b601f01601f19169290920160200192915050565b602081525f6115e96020830184612ca7565b80356001600160a01b0381168114610ef7575f80fd5b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b0381118282101715612d3657612d36612cfa565b604052919050565b5f6001600160401b03821115612d5657612d56612cfa565b50601f01601f191660200190565b5f82601f830112612d73575f80fd5b8135612d86612d8182612d3e565b612d0e565b818152846020838601011115612d9a575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f8060808587031215612dc9575f80fd5b612dd285612ce4565b9350612de060208601612ce4565b92506040850135915060608501356001600160401b03811115612e01575f80fd5b612e0d87828801612d64565b91505092959194509250565b5f6001600160401b03821115612e3157612e31612cfa565b5060051b60200190565b5f82601f830112612e4a575f80fd5b81356020612e5a612d8183612e19565b82815260059290921b84018101918181019086841115612e78575f80fd5b8286015b84811015612e9a57612e8d81612ce4565b8352918301918301612e7c565b509695505050505050565b5f82601f830112612eb4575f80fd5b81356020612ec4612d8183612e19565b82815260059290921b84018101918181019086841115612ee2575f80fd5b8286015b84811015612e9a5780358352918301918301612ee6565b5f82601f830112612f0c575f80fd5b81356020612f1c612d8183612e19565b82815260059290921b84018101918181019086841115612f3a575f80fd5b8286015b84811015612e9a5780356001600160401b03811115612f5c575f8081fd5b612f6a8986838b0101612d64565b845250918301918301612f3e565b5f805f8060808587031215612f8b575f80fd5b84356001600160401b0380821115612fa1575f80fd5b612fad88838901612e3b565b95506020870135915080821115612fc2575f80fd5b612fce88838901612ea5565b94506040870135915080821115612fe3575f80fd5b50612ff087828801612efd565b949793965093946060013593505050565b5f60208284031215613011575f80fd5b81356001600160401b03811115613026575f80fd5b610f1b84828501612d64565b634e487b7160e01b5f52602160045260245ffd5b6008811061306257634e487b7160e01b5f52602160045260245ffd5b9052565b602081016109fc8284613046565b5f8060408385031215613085575f80fd5b8235915061309560208401612ce4565b90509250929050565b803560ff81168114610ef7575f80fd5b5f80604083850312156130bf575f80fd5b823591506130956020840161309e565b5f8083601f8401126130df575f80fd5b5081356001600160401b038111156130f5575f80fd5b60208301915083602082850101111561310c575f80fd5b9250929050565b5f805f805f805f60c0888a031215613129575f80fd5b873596506131396020890161309e565b955061314760408901612ce4565b945060608801356001600160401b0380821115613162575f80fd5b61316e8b838c016130cf565b909650945060808a0135915080821115613186575f80fd5b6131928b838c01612d64565b935060a08a01359150808211156131a7575f80fd5b506131b48a828b01612d64565b91505092959891949750929550565b5f805f805f608086880312156131d7575f80fd5b853594506131e76020870161309e565b935060408601356001600160401b0380821115613202575f80fd5b61320e89838a016130cf565b90955093506060880135915080821115613226575f80fd5b5061323388828901612d64565b9150509295509295909350565b65ffffffffffff81168114610a18575f80fd5b5f60208284031215613263575f80fd5b81356115e981613240565b5f805f8060608587031215613281575f80fd5b843593506132916020860161309e565b925060408501356001600160401b038111156132ab575f80fd5b6132b7878288016130cf565b95989497509550505050565b5f805f80608085870312156132d6575f80fd5b84356001600160401b03808211156132ec575f80fd5b6132f888838901612e3b565b9550602087013591508082111561330d575f80fd5b61331988838901612ea5565b9450604087013591508082111561332e575f80fd5b61333a88838901612efd565b9350606087013591508082111561334f575f80fd5b50612e0d87828801612d64565b5f6020828403121561336c575f80fd5b6115e982612ce4565b5f8151808452602080850194508084015f5b838110156133a357815187529582019590820190600101613387565b509495945050505050565b60ff60f81b8816815260e060208201525f6133cc60e0830189612ca7565b82810360408401526133de8189612ca7565b606084018890526001600160a01b038716608085015260a0840186905283810360c0850152905061340f8185613375565b9a9950505050505050505050565b5f805f8060808587031215613430575f80fd5b843593506134406020860161309e565b925061344e60408601612ce4565b915060608501356001600160401b03811115612e01575f80fd5b5f805f6060848603121561347a575f80fd5b61348384612ce4565b92506020840135915060408401356001600160401b038111156134a4575f80fd5b6134b086828701612d64565b9150509250925092565b5f805f805f60a086880312156134ce575f80fd5b6134d786612ce4565b94506134e560208701612ce4565b935060408601356001600160401b0380821115613500575f80fd5b61350c89838a01612ea5565b94506060880135915080821115613521575f80fd5b61352d89838a01612ea5565b93506080880135915080821115613226575f80fd5b5f805f8060608587031215613555575f80fd5b61355e85612ce4565b93506020850135925060408501356001600160401b038111156132ab575f80fd5b5f6020828403121561358f575f80fd5b813563ffffffff811681146115e9575f80fd5b5f80604083850312156135b3575f80fd5b6135bc83612ce4565b946020939093013593505050565b5f805f805f60a086880312156135de575f80fd5b6135e786612ce4565b94506135f560208701612ce4565b9350604086013592506060860135915060808601356001600160401b0381111561361d575f80fd5b61323388828901612d64565b600181811c9082168061363d57607f821691505b60208210810361365b57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156136a6575f81815260208120601f850160051c810160208610156136875750805b601f850160051c820191505b8181101561187957828155600101613693565b505050565b81516001600160401b038111156136c4576136c4612cfa565b6136d8816136d28454613629565b84613661565b602080601f83116001811461370b575f84156136f45750858301515b5f19600386901b1c1916600185901b178555611879565b5f85815260208120601f198616915b828110156137395788860151825594840194600190910190840161371a565b508582101561375657878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f6001820161379f5761379f61377a565b5060010190565b5f602082840312156137b6575f80fd5b81516001600160401b038111156137cb575f80fd5b8201601f810184136137db575f80fd5b80516137e9612d8182612d3e565b8181528560208385010111156137fd575f80fd5b611987826020830160208601612c85565b818382375f9101908152919050565b818103818111156109fc576109fc61377a565b65ffffffffffff82811682821603908082111561384f5761384f61377a565b5092915050565b5f60208284031215613866575f80fd5b81516115e981613240565b65ffffffffffff81811683821601908082111561384f5761384f61377a565b5f8151808452602080850194508084015f5b838110156133a35781516001600160a01b0316875295820195908201906001016138a2565b5f81518084526020808501808196508360051b810191508286015f5b8581101561390d5782840389526138fb848351612ca7565b988501989350908401906001016138e3565b5091979650505050505050565b608081525f61392c6080830187613890565b828103602084015261393e8187613375565b9050828103604084015261395281866138c7565b91505082606083015295945050505050565b838152606081016139786020830185613046565b826040830152949350505050565b5f8251613997818460208701612c85565b9190910192915050565b808201808211156109fc576109fc61377a565b60ff81811683821601908111156109fc576109fc61377a565b600181815b80851115613a0757815f19048211156139ed576139ed61377a565b808516156139fa57918102915b93841c93908002906139d2565b509250929050565b5f82613a1d575060016109fc565b81613a2957505f6109fc565b8160018114613a3f5760028114613a4957613a65565b60019150506109fc565b60ff841115613a5a57613a5a61377a565b50506001821b6109fc565b5060208310610133831016604e8410600b8410161715613a88575081810a6109fc565b613a9283836139cd565b805f1904821115613aa557613aa561377a565b029392505050565b5f6115e960ff841683613a0f565b84815260ff84166020820152826040820152608060608201525f610e326080830184612ca7565b85815260ff8516602082015283604082015260a060608201525f613b0960a0830185612ca7565b82810360808401526112638185612ca7565b5f6101208b8352602060018060a01b038c1681850152816040850152613b438285018c613890565b91508382036060850152613b57828b613375565b915083820360808501528189518084528284019150828160051b850101838c015f5b83811015613ba757601f19878403018552613b95838351612ca7565b94860194925090850190600101613b79565b505086810360a0880152613bbb818c6138c7565b9450505050508560c08401528460e0840152828103610100840152613be08185612ca7565b9c9b505050505050505050505050565b5f60208284031215613c00575f80fd5b5051919050565b80820281158282048414176109fc576109fc61377a565b634e487b7160e01b5f52601260045260245ffd5b5f82613c4c57634e487b7160e01b5f52601260045260245ffd5b500490565b828152604060208201525f610f1b6040830184612ca756fea2646970667358221220ba7be86f1c3f53ea77c9c6be606210fee8e3967a0b594c0a039d0e86bcb62b7364736f6c63430008140033'

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
