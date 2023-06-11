export function GetNetworkColor(chain?: string) {
  // mainnets
  if (chain === 'homestead') return 'blue'
  if (chain === 'polygon') return 'purple'
  if (chain === 'bsc') return 'yellow'
  if (chain === 'arbitrum') return 'pink'
  if (chain === 'optimism') return 'red'
  if (chain === 'avalanche') return 'orange'
  if (chain === 'gnosis') return 'green'

  // testnets
  if (chain === 'goerli') return 'green'
  if (chain === 'optimism-goerli') return 'red'
  if (chain === 'arbitrum-goerli') return 'pink'
  if (chain === 'avalanche-fuji') return 'orange'
  if (chain === 'polygon-mumbai') return 'purple'

  // disconnected
  return 'gray'
}
