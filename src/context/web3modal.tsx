'use client'
import { ReactNode } from 'react'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

interface Props {
  children?: ReactNode
}

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''
const optimismEndpoint = process.env.NEXT_PUBLIC_OPTIMISM_RPC_ENDPOINT_URL || 'https://mainnet.optimism.io'
const sepoliaEndpoint = process.env.NEXT_PUBLIC_SEPOLIA_RPC_ENDPOINT_URL || 'https://sepolia.gateway.tenderly.co'

const sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  chainName: 'Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: sepoliaEndpoint,
  blockExplorerUrl: 'https://sepolia.etherscan.io',
}

const optimism = {
  chainId: 10,
  name: 'Optimism',
  chainName: 'Optimism',
  currency: 'ETH',
  explorerUrl: 'https://optimistic.etherscan.io/',
  rpcUrl: optimismEndpoint,
  blockExplorerUrl: 'https://optimistic.etherscan.io/',
}

const metadata = {
  name: 'Gov Deployer',
  description: 'Deploy your own onchain DAO in a few seconds',
  url: 'https://gov-deployer.netlify.app',
  icons: ['./favicon.ico'],
}

const ethersConfig = defaultConfig({
  metadata,
  // defaultChainId: 11155111, // Sepolia
  defaultChainId: 10, // Optimism
  rpcUrl: optimismEndpoint,
  auth: {
    email: true,
    // socials: ['google', 'x', 'github', 'discord', 'apple'],
    socials: ['google', 'farcaster'],
    showWallets: true,
    walletFeatures: true,
  },
})

createWeb3Modal({
  ethersConfig,
  chains: [optimism, sepolia],
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeMode: 'dark',
  themeVariables: {},
})

export function Web3Modal({ children }: Props) {
  return <div>{children}</div>
}
