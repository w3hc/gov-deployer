import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_URL } from '../../utils/config'

interface Props {
  title?: string
  description?: string
}

export function Head({ title, description }: Props) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
  const img = `${origin}/huangshan.png`

  return (
    <NextHead>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content={img} />
      <meta name="twitter:site" content="@W3HC8" />
      <meta name="twitter:title" content="Gov Deployer" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <meta
        property="og:image"
        content={'https://bafybeihe26iouj6he5dpbldbdwicfy25b7gnynlwf7g2xg5ddex7b4zse4.ipfs.w3s.link/gov-deployer-logo-june-2023.png'}
      />
    </NextHead>
  )
}
