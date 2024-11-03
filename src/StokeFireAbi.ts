//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AttackFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const attackFacetAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_attackerVillageId', internalType: 'uint256', type: 'uint256' },
      { name: '_defenderVillageId', internalType: 'uint256', type: 'uint256' },
      { name: '_resourceToSteal', internalType: 'uint16', type: 'uint16' },
      { name: '_seed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'attackVillage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attackerVillageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetVillageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'resourceToSteal',
        internalType: 'uint16',
        type: 'uint16',
        indexed: false,
      },
    ],
    name: 'AttackVillage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attackerVillageIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'defenderVillageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'winnerVillageIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'resourcesExchanged',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'amountResources',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'RevealBattleResult',
  },
  { type: 'error', inputs: [], name: 'AttackTimeHasNotPassed' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyAttackedInTheInterval' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
  { type: 'error', inputs: [], name: 'VillageHasAlreadyBeenAttacked' },
  {
    type: 'error',
    inputs: [{ name: 'villageId', internalType: 'uint256', type: 'uint256' }],
    name: 'YouHaveAlreadyMadeAnAttack',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BuildFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const buildFacetAbi = [
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'buildHut',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'hutsToAdd',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      { name: 'woodToAdd', internalType: 'int8', type: 'int8', indexed: false },
    ],
    name: 'BuildHut',
  },
  { type: 'error', inputs: [], name: 'BuildHutNotEnoughWood' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DefendFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const defendFacetAbi = [
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'clearHash',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_storedHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'commitDefend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_defenderVillageId', internalType: 'uint256', type: 'uint256' },
      { name: '_attackerVillageId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAttackDecision',
    outputs: [
      {
        name: '',
        internalType: 'struct AttackDecision',
        type: 'tuple',
        components: [
          { name: 'resourceToSteal', internalType: 'uint16', type: 'uint16' },
          { name: 'timeAttacked', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenIdStoredHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_resourceToProtect', internalType: 'uint16', type: 'uint16' },
      { name: '_secret', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'revealBattleResult',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClearHash',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CommitDefense',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attackerVillageIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'defenderVillageId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'winnerVillageIds',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'resourcesExchanged',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'amountResources',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'RevealBattleResult',
  },
  { type: 'error', inputs: [], name: 'AlreadyCommittedDefense' },
  { type: 'error', inputs: [], name: 'NoDefenseCommitted' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'RevealedHashesDontMatch' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
  { type: 'error', inputs: [], name: 'VillageHasNotBeenAttacked' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Diamond
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const diamondAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_contractOwner', internalType: 'address', type: 'address' },
      { name: '_diamondCutFacet', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'payable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_diamondCut',
        internalType: 'struct IDiamondCut.FacetCut[]',
        type: 'tuple[]',
        components: [
          { name: 'facetAddress', internalType: 'address', type: 'address' },
          {
            name: 'action',
            internalType: 'enum IDiamondCut.FacetCutAction',
            type: 'uint8',
          },
          {
            name: 'functionSelectors',
            internalType: 'bytes4[]',
            type: 'bytes4[]',
          },
        ],
        indexed: false,
      },
      {
        name: '_init',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: '_calldata',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DiamondCut',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'error',
    inputs: [
      {
        name: '_initializationContractAddress',
        internalType: 'address',
        type: 'address',
      },
      { name: '_calldata', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'InitializationFunctionReverted',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FireToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fireTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_routerAdddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: '_isExcludedMaxTransactionAmount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acknowledgement',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'automatedMarketMakerPairs',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_addr', internalType: 'address', type: 'address' }],
    name: 'blacklist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'lpAddress', internalType: 'address', type: 'address' }],
    name: 'blacklistLiquidityPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'blacklistRenounced',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'burnAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyLiquidityFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyRevShareFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyTeamFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buyTotalFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enableTrading',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'excluded', internalType: 'bool', type: 'bool' },
    ],
    name: 'excludeFromFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'updAds', internalType: 'address', type: 'address' },
      { name: 'isEx', internalType: 'bool', type: 'bool' },
    ],
    name: 'excludeFromMaxTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isBlacklisted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isExcludedFromFees',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'limitsInEffect',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxTransactionAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxWallet',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'preMigrationPhase',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'preMigrationTransferrable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeLimits',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'revShareWallet',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'risks',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellLiquidityFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellRevShareFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellTeamFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellTotalFees',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'bool', type: 'bool' },
    ],
    name: 'setAutomatedMarketMakerPair',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_addr', internalType: 'address', type: 'address' },
      { name: 'isAuthorized', internalType: 'bool', type: 'bool' },
    ],
    name: 'setPreMigrationTransferable',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_router', internalType: 'address', type: 'address' }],
    name: 'setRouter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'swapEnabled',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'swapTokensAtAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'teamWallet',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForLiquidity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForRevShare',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokensForTeam',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tradingActive',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_addr', internalType: 'address', type: 'address' }],
    name: 'unblacklist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV2Pair',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniswapV2Router',
    outputs: [
      {
        name: '',
        internalType: 'contract IUniswapV2Router02',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_revShareFee', internalType: 'uint256', type: 'uint256' },
      { name: '_liquidityFee', internalType: 'uint256', type: 'uint256' },
      { name: '_teamFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateBuyFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNum', internalType: 'uint256', type: 'uint256' }],
    name: 'updateMaxTxnAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newNum', internalType: 'uint256', type: 'uint256' }],
    name: 'updateMaxWalletAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newRevShareWallet', internalType: 'address', type: 'address' },
    ],
    name: 'updateRevShareWallet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_revShareFee', internalType: 'uint256', type: 'uint256' },
      { name: '_liquidityFee', internalType: 'uint256', type: 'uint256' },
      { name: '_teamFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateSellFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
    name: 'updateSwapEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'updateSwapTokensAtAmount',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newWallet', internalType: 'address', type: 'address' }],
    name: 'updateTeamWallet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'toAddr', internalType: 'address', type: 'address' }],
    name: 'withdrawStuckEth',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawStuckFire',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_token', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
    ],
    name: 'withdrawStuckToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'isExcluded',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'ExcludeFromFees',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'pair', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'bool', type: 'bool', indexed: true },
    ],
    name: 'SetAutomatedMarketMakerPair',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokensSwapped',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'ethReceived',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokensIntoLiquidity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SwapAndLiquify',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UpdateUniswapV2Router',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'revShareWalletUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'oldWallet',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'teamWalletUpdated',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Burnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20BurnableAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IStokeFireNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStokeFireNftAbi = [
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_a', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV2Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV2FactoryAbi = [
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'allPairs',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'allPairsLength',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'createPair',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeTo',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeToSetter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
    ],
    name: 'getPair',
    outputs: [{ name: 'pair', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'setFeeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'setFeeToSetter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token0',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'token1',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pair',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: '', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'PairCreated',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV2Pair
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV2PairAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'burn',
    outputs: [
      { name: 'amount0', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getReserves',
    outputs: [
      { name: 'reserve0', internalType: 'uint112', type: 'uint112' },
      { name: 'reserve1', internalType: 'uint112', type: 'uint112' },
      { name: 'blockTimestampLast', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kLast',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: 'liquidity', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'skim',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount0Out', internalType: 'uint256', type: 'uint256' },
      { name: 'amount1Out', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sync',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token0',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token1',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount0In',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1In',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount0Out',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount1Out',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'Swap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'reserve0',
        internalType: 'uint112',
        type: 'uint112',
        indexed: false,
      },
      {
        name: 'reserve1',
        internalType: 'uint112',
        type: 'uint112',
        indexed: false,
      },
    ],
    name: 'Sync',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUniswapV2Router02
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUniswapV2Router02Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'WETH',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'address', type: 'address' },
      { name: 'tokenB', internalType: 'address', type: 'address' },
      { name: 'amountADesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountAMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountTokenDesired', internalType: 'uint256', type: 'uint256' },
      { name: 'amountTokenMin', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETHMin', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addLiquidityETH',
    outputs: [
      { name: 'amountToken', internalType: 'uint256', type: 'uint256' },
      { name: 'amountETH', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactETHForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForETHSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMin', internalType: 'uint256', type: 'uint256' },
      { name: 'path', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ResourceFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const resourceFacetAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'SPEED_UP_INTERVAL',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_seed', internalType: 'uint256', type: 'uint256' },
      { name: '_numVillagers', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'chopWood',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_seed', internalType: 'uint256', type: 'uint256' },
      { name: '_numVillagers', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'gatherFood',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'receiveOnboardingGift',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_cost', internalType: 'uint256', type: 'uint256' }],
    name: 'setFireCostOnSpeedUp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'speedUpChop',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'speedUpGather',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amountBurnt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BurnFire',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeChopped',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'woodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ChopWood',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeChopped',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'woodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'numVillagers',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ChopWoodV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeGathered',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'foodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'GatherFood',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeGathered',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'foodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'numVillagers',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'GatherFoodV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'woodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'foodAdded',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ReceiveOnboardingGift',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetFireCostOnSpeedUp',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'fireCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interval',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SpeedUpChop',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'fireCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interval',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SpeedUpGather',
  },
  { type: 'error', inputs: [], name: 'ChopWoodTimeHasNotPassed' },
  { type: 'error', inputs: [], name: 'GatherFoodTimeHasNotPassed' },
  { type: 'error', inputs: [], name: 'NotCorrectLevelToReceiveGift' },
  { type: 'error', inputs: [], name: 'NotEnoughFireAllowance' },
  { type: 'error', inputs: [], name: 'NotEnoughFireToken' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotThatManyVillagersAvailable' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'SpeedUpTimeHasNotPassed' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StokeFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stokeFacetAbi = [
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'razeStokeFire',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_cost', internalType: 'uint256', type: 'uint256' }],
    name: 'setFireCostOnStoke',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_seed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'stoke',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amountBurnt',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BurnFire',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeRazed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'razedByAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'RazeStokeFire',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RedeemRewards',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RedeemRewardsFromRaze',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newCost',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetFireCostOnStoke',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timeStoked',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'scoreToAdd',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      { name: 'woodToAdd', internalType: 'int8', type: 'int8', indexed: false },
      {
        name: 'foodToAdd',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'villagersToAdd',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
    ],
    name: 'Stoke',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'UpgradeLevel',
  },
  { type: 'error', inputs: [], name: 'FailedToApproveFire' },
  { type: 'error', inputs: [], name: 'FireStokedTooRecentlyToRaze' },
  { type: 'error', inputs: [], name: 'FireTooOldToStoke' },
  { type: 'error', inputs: [], name: 'NotEnoughFireAllowance' },
  { type: 'error', inputs: [], name: 'NotEnoughFireToken' },
  { type: 'error', inputs: [], name: 'NotEnoughScoreToRedeem' },
  { type: 'error', inputs: [], name: 'NotEnoughWoodToStoke' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'RedeemRewardPaymentFailed' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VillageFacet
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const villageFacetAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'afterTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'beforeTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_a', internalType: 'address', type: 'address' }],
    name: 'getCanMint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getEthOwed',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getForwardFireAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getStokeFireNFTAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTotalVillageScore',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getVillage',
    outputs: [
      {
        name: '',
        internalType: 'struct Village',
        type: 'tuple',
        components: [
          { name: 'villageId', internalType: 'uint256', type: 'uint256' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'timeMinted', internalType: 'uint256', type: 'uint256' },
          { name: 'timeRazed', internalType: 'uint256', type: 'uint256' },
          { name: 'score', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeFireLastStoked',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'wood', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeLastChoppedWood',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'food', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeLastGatheredFood',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'huts', internalType: 'uint256', type: 'uint256' },
          { name: 'villagers', internalType: 'uint256', type: 'uint256' },
          {
            name: 'timeLastAttacked',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'timeLastAttackedBySomeone',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'attackedByVillageIds',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'level', internalType: 'uint32', type: 'uint32' },
          {
            name: 'villagersChopping',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'villagersGathering',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'timeLastSpeedUpChop',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'timeLastSpeedUpGather',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'name', internalType: 'string', type: 'string' }],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'onReceive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingEth',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'redeemRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_a', internalType: 'address', type: 'address' }],
    name: 'setFireAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_a', internalType: 'address', type: 'address' }],
    name: 'setForwardFireAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_a', internalType: 'address', type: 'address' },
      { name: '_canMint', internalType: 'bool', type: 'bool' },
    ],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_a', internalType: 'address', type: 'address' }],
    name: 'setStokeFireNFTAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'isEmit', internalType: 'bool', type: 'bool' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_food', internalType: 'uint256', type: 'uint256' },
      { name: '_wood', internalType: 'uint256', type: 'uint256' },
      { name: '_huts', internalType: 'uint256', type: 'uint256' },
      { name: '_villagers', internalType: 'uint256', type: 'uint256' },
      { name: '_score', internalType: 'uint256', type: 'uint256' },
      { name: '_level', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'setVillageDataForTesting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'MintVillage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newEthAccPerScore',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OnReceive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RedeemRewards',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RedeemRewardsFromRaze',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'blockTimeSwitchToNewRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalVillageScoreAtSwitch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'balanceAtSwitch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetRewardsSwitch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'food',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'wood',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'huts',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'villagers',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'score',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'level', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'SetVillageDataForTesting',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'VillageTransfered',
  },
  { type: 'error', inputs: [], name: 'NoTransfersCurrently' },
  { type: 'error', inputs: [], name: 'NotADayOfHisotryOnChain' },
  { type: 'error', inputs: [], name: 'NotEnoughScoreToRedeem' },
  { type: 'error', inputs: [], name: 'NotForwardFireAddress' },
  { type: 'error', inputs: [], name: 'NotVillageOwner' },
  { type: 'error', inputs: [], name: 'PlayerHasNotRevealedAttack' },
  { type: 'error', inputs: [], name: 'RedeemRewardPaymentFailed' },
  { type: 'error', inputs: [], name: 'UserNoAccessToMint' },
  { type: 'error', inputs: [], name: 'VillageAlreadyRazed' },
] as const
