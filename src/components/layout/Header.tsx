import React from 'react'
import { Image, Text, Box, Card, CardBody, useColorModeValue, Spacer, Flex } from '@chakra-ui/react'

import { SITE_NAME } from 'utils/config'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex as="header" className={className} bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={5} mb={8} alignItems="center">
      <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
        <LinkComponent href="/">
          <Image
            width="50"
            height="50"
            alt="gov-deployer-logo"
            src="https://bafybeihe26iouj6he5dpbldbdwicfy25b7gnynlwf7g2xg5ddex7b4zse4.ipfs.w3s.link/gov-deployer-logo-june-2023.png"
          />
        </LinkComponent>
      </div>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        {/* <PassportScore /> */}
        <w3m-button />
        <ThemeSwitcher />
      </Flex>
    </Flex>
  )
}
