import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_DESCRIPTION, SITE_NAME } from 'utils/config'

interface Props {
  title?: string
  description?: string
}

export function Head(props: Props) {
  return (
    <NextHead>
      <title>{props.title ?? SITE_NAME} </title>
      <meta property="og:url" content="https://w3hc-nextjs-boilerplate.netlify.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title ?? SITE_NAME} />
      <meta name="twitter:card" content={SITE_DESCRIPTION} />
      <meta property="og:description" content={props.description ?? SITE_DESCRIPTION} />
      <meta
        property="og:image"
        content={'https://bafybeihe26iouj6he5dpbldbdwicfy25b7gnynlwf7g2xg5ddex7b4zse4.ipfs.w3s.link/gov-deployer-logo-june-2023.png'}
      />
      <meta name="description" content={props.description ?? SITE_DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </NextHead>
  )
}
