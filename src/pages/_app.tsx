import React from 'react'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Seo } from '../components/layout/Seo'
import Layout from '../components/layout'
import ErrorBoundary from '../components/layout/ErrorBoundary'
import { Web3Modal } from '../context/web3modal'
import { useIsMounted } from '../hooks/useIsMounted'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <ErrorBoundary>
      <ChakraProvider>
        <Seo />
        {isMounted && (
          <Layout>
            <Web3Modal>
              <Component {...pageProps} />
            </Web3Modal>
          </Layout>
        )}
      </ChakraProvider>
    </ErrorBoundary>
  )
}
