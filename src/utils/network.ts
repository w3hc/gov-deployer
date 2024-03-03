export function GetNetworkColor(chain?: string) {
  if (chain === 'sepolia') return 'purple'
  if (chain === 'mainnet') return 'blue'

  return 'grey'
}
