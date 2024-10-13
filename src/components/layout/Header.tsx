import React from 'react'
import { Flex, useColorModeValue, Spacer, Image, Box, Link, Icon } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { FaGithub } from 'react-icons/fa'
import { Web3Modal } from '../../context/web3modal'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''
  // const { isConnected, address } = useAppKit()

  return (
    <Flex as="header" className={className} bg={useColorModeValue('gray.100', 'gray.900')} px={4} py={5} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Image
          width="50"
          height="50"
          alt="gov-deployer-logo"
          src="https://bafybeihe26iouj6he5dpbldbdwicfy25b7gnynlwf7g2xg5ddex7b4zse4.ipfs.w3s.link/gov-deployer-logo-june-2023.png"
        />
      </LinkComponent>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        <w3m-button />
        {/* <w3m-network-button /> */}
        {/* {isConnected && address && (
          <Box>
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </Box>
        )} */}
        <Flex alignItems="center">
          <ThemeSwitcher />
          <Box mt={2} ml={4}>
            <Link href="https://github.com/w3hc/gov-deployer" isExternal>
              <Icon as={FaGithub} boxSize={5} _hover={{ color: 'blue.500' }} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
