import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading, Box, Link, Icon, Button, Image } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { SITE_NAME } from '../../utils/config'
import { FaGithub } from 'react-icons/fa'
import { useWeb3Modal } from '@web3modal/ethers/react'
import { useWeb3ModalAccount, useDisconnect, useSwitchNetwork } from '@web3modal/ethers/react'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''
  const { open } = useWeb3Modal()
  const { isConnected } = useWeb3ModalAccount()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useSwitchNetwork()

  const handleAuth = async () => {
    if (isConnected) {
      await disconnect()
    } else {
      await open()
    }
  }

  // TODO: Add a burger menu here
  // const handleSwitchNetwork = async () => {
  //   await switchNetwork()
  // }

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
        {/* <Box mt={2} ml={4}> */}
        {/* Adjust the height as needed */}
        <w3m-network-button />
        {/* </Box> */}
        <Button onClick={handleAuth} colorScheme="blue" size="sm">
          {isConnected ? 'Logout' : 'Login'}
        </Button>
        <Flex alignItems="center">
          <ThemeSwitcher />
          <Box mt={2} ml={4}>
            <Link href="https://github.com/w3hc/genji" isExternal>
              <Icon as={FaGithub} boxSize={5} _hover={{ color: 'blue.500' }} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
