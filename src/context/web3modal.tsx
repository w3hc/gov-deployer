'use client'
import React, { ReactNode, createContext, useContext } from 'react'
import { createAppKit, useAppKitProvider } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia, optimism } from '@reown/appkit/networks'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
const optimismEndpoint = process.env.NEXT_PUBLIC_OPTIMISM_RPC_ENDPOINT_URL || 'https://mainnet.optimism.io'
const sepoliaEndpoint = process.env.NEXT_PUBLIC_SEPOLIA_RPC_ENDPOINT_URL || 'https://sepolia.infura.io/v3/your-infura-id'

// const customSepolia = {
//   ...sepolia,
//   rpcUrl: sepoliaEndpoint,
// }

// const customOptimism = {
//   ...optimism,
//   rpcUrl: optimismEndpoint,
// }

const metadata = {
  name: 'Gov Deployer',
  description: 'Deploy your own onchain DAO in a few seconds',
  url: 'https://gov-deployer.netlify.app',
  icons: ['./favicon.ico'],
}

createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [sepolia, optimism],
  projectId,
})

const AppKitContext = createContext<ReturnType<typeof useAppKitProvider> | null>(null)

export function Web3Modal({ children }: { children: ReactNode }) {
  const appKitProvider = useAppKitProvider('eip155:11155111' as any)

  return <AppKitContext.Provider value={appKitProvider}>{children}</AppKitContext.Provider>
}

export function useAppKit() {
  const context = useContext(AppKitContext)
  if (!context) {
    throw new Error('useAppKit must be used within a Web3Modal')
  }
  return context
}
