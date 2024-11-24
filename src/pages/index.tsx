import * as React from 'react'
import { Heading, Button, FormControl, FormLabel, Textarea, Input, FormHelperText, useToast, UnorderedList, ListItem } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { BrowserProvider, Contract, Eip1193Provider, formatEther, ContractFactory } from 'ethers'
import { useAppKitAccount, useAppKitProvider, useAppKit } from '@reown/appkit/react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { ethers } from 'ethers'
import { Head } from '../components/layout/Head'
import nftContract from '../utils/NFT.json'
import govContract from '../utils/Gov.json'
import { ExternalLinkIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { create } from '@web3-storage/w3up-client'

export default function Home() {
  const [network, setNetwork] = useState<string>('Unknown')
  const [loading, setLoading] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isDeployed, setIsDeployed] = useState('')
  const [daoName, setDaoName] = useState('Our DAO')
  const [missionStatement, setMissionStatement] = useState('We want to achieve this and that.')
  const [votingPeriod, setVotingPeriod] = useState('1296000')
  const [votingDelay, setVotingDelay] = useState('0')
  const [votingThreshold, setVotingThreshold] = useState('1')
  const [quorum, setQuorum] = useState('20')
  const [nftName, setNftName] = useState(daoName + ' Membership NFT')
  const [nftSymbol, setNftSymbol] = useState('OURDAO')
  const [daoInfo, setDaoInfo] = useState({ govAddress: '', govBlock: 0, nftAddress: '', nftBlock: 0 })
  const [firstMembers, setFirstMembers] = useState<any>([''])

  const [file, setFile] = useState<File | null>(null)
  const [balance, setBalance] = useState<string>('0')

  const { address, isConnected, caipAddress } = useAppKitAccount()
  const { walletProvider } = useAppKitProvider('eip155')
  const toast = useToast()

  useEffect(() => {
    if (isConnected) {
      getNetwork()
      getBalance()
      setFirstMembers([address])
    }
    console.log('network:', network)
  }, [isConnected, address, caipAddress])

  const getNetwork = async () => {
    if (walletProvider) {
      const ethersProvider = new BrowserProvider(walletProvider as any)
      const network = await ethersProvider.getNetwork()
      const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
      setNetwork(capitalize(network.name))
    }
  }

  const getBalance = async () => {
    if (walletProvider && address) {
      const ethersProvider = new BrowserProvider(walletProvider as any)
      const balance = await ethersProvider.getBalance(address)
      setBalance(formatEther(balance))
      console.log('user balance:', Number(balance))
    }
  }

  const createSpaceForUser = async () => {
    try {
      const client = await create()
      const account = await client.login('julien@strat.cc')
      await account.plan.wait()

      // Get existing spaces
      const spaces = await client.spaces()
      let space

      // Use the first available space or create one if none exists
      if (spaces.length > 0) {
        space = spaces[0]
      } else {
        space = await client.createSpace('gov-deployer')
      }

      // Set the current space
      await client.setCurrentSpace(space.did())
      console.log('Space DID:', space.did())

      return { client, space }
    } catch (error) {
      console.error('Error accessing storage space:', error)
      toast({
        title: 'Storage Error',
        description: 'There was an issue with the storage service. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      throw error
    }
  }

  const deployDao = async (e: any) => {
    e.preventDefault()

    try {
      setLoading(true)
      console.log('Deployment started...')
      console.log('daoName:', daoName)
      console.log('missionStatement:', missionStatement)
      console.log('firstMembers:', firstMembers)

      console.log('votingPeriod:', votingPeriod)
      console.log('votingDelay:', votingDelay)
      console.log('votingThreshold:', votingThreshold)
      console.log('quorum:', quorum)
      console.log('nftName:', nftName)
      console.log('nftSymbol:', nftSymbol)

      if (!isConnected) {
        toast({
          title: 'No wallet',
          description: 'Please connect your wallet first.',
          status: 'error',
          position: 'bottom',
          variant: 'subtle',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
        return
      }

      if (Number(balance) === 0) {
        console.log('balance too low')
        toast({
          title: 'Insufficient balance',
          description: 'You need some ETH to deploy. Maybe try to select another network. Sorry for the inconvenience.',
          status: 'warning',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
        return
      }

      const { client } = await createSpaceForUser()

      // checks if the Web3 Storage client is ready
      if (!client) {
        toast({
          title: 'Storacha client not initialized',
          description: 'Please try again in a few moments.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        setLoading(false)
        return
      }

      // Manifesto storage
      const manifestoContent = `# ${daoName} Manifesto\n\n## Statement of Intent\n\n**${missionStatement}**`
      console.log('manifestoContents', manifestoContent)
      const manifestoBlob = new Blob([manifestoContent], { type: 'text/markdown' })
      const manifestoFile = new File([manifestoBlob], 'manifesto.md', { type: 'text/markdown' })
      const manifestoCID = (await client.uploadFile(manifestoFile)).toString()
      console.log('manifestoCID:', manifestoCID)
      console.log('manifestoURL:', `https://${manifestoCID}.ipfs.w3s.link`)

      // Image storage
      let imageCID = 'bafkreibtyrgtm4cfilmrq6ax3s6vrhsyuesul5tkpuve66euozph2wg6iq' // default image (Huangshan)
      if (!file) {
      } else {
        imageCID = (await client.uploadFile(file)) as any
      }

      console.log('imageCID:', imageCID.toString())

      // Metadata storage
      const metadata = {
        name: nftName,
        description: 'The owner of this NFT has a right to vote on all DAO proposals.',
        image: 'ipfs://' + imageCID,
      }
      console.log('metadata:', metadata)
      const metadataBlob = new Blob([JSON.stringify(metadata)], { type: 'application/json' })
      const metadataFile = new File([metadataBlob], 'metadata.json', { type: 'application/json' })
      const metadataCID = await client.uploadFile(metadataFile)
      console.log('metadataCID:', metadataCID.toString())
      const uri = `ipfs://${metadataCID}`

      // Deploy the NFT contract
      const ethersProvider = new BrowserProvider(walletProvider as Eip1193Provider)
      const signer = await ethersProvider.getSigner()
      console.log('firstMembers:', firstMembers)

      const nftFactory = new ContractFactory(nftContract.abi, nftContract.bytecode, signer)
      console.log('user address:', address)
      const nft = await nftFactory.deploy(address, firstMembers, uri, nftName, nftSymbol)
      console.log('nft:', await nft.deploymentTransaction()?.wait(1))
      console.log('NFT contract address:', await nft.getAddress())
      const nftDeployment = await nft.deploymentTransaction()?.wait(1)
      toast({
        title: 'NFT contract deployed ✅',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom',
        variant: 'subtle',
      })
      console.log('NFT contract deployed ✅')

      // Deploy the Gov contract
      const govFactory = new ContractFactory(govContract.abi, govContract.bytecode, signer as any)
      const nftContractAddress = await nft.getAddress()
      console.log('manifestoCID:', manifestoCID)
      console.log('daoName:', daoName)
      console.log('votingDelay:', votingDelay)
      console.log('votingPeriod:', votingPeriod)
      console.log('votingThreshold:', votingThreshold)
      console.log('quorum:', quorum)

      const gov = await govFactory.deploy(nftContractAddress, manifestoCID, daoName, votingDelay, votingPeriod, votingThreshold, quorum)
      console.log('gov:', await gov.deploymentTransaction()?.wait(1))
      const govDeployment = await gov.deploymentTransaction()?.wait(1)
      console.log('Gov contract address:', await gov.getAddress())
      toast({
        title: 'DAO contract deployed ✅',
        description: 'Contract address: ' + (await gov.getAddress()),
        status: 'success',
        duration: 3000,
        position: 'bottom',
        variant: 'subtle',
        isClosable: true,
      })
      console.log('Gov contract deployed ✅')

      // Transfer ownership to the DAO
      const nftInstance = new ethers.Contract(nftContractAddress, nftContract.abi, signer as any)
      const ownershipTransfer = await nftInstance.transferOwnership(await gov.getAddress())
      await ownershipTransfer.wait(1)
      console.log('\nNFT contract ownership transferred to the DAO', '✅')

      toast({
        title: 'Successful deployment',
        description: 'Your DAO is successfully deployed! 🎉',
        status: 'success',
        position: 'bottom',
        variant: 'subtle',
        duration: 20000,
        isClosable: true,
      })
      setLoading(false)
      setIsDeployed(await gov.getAddress())
      setDaoInfo({
        govAddress: await gov.getAddress(),
        govBlock: Number(govDeployment?.blockNumber),
        nftAddress: nftContractAddress,
        nftBlock: Number(nftDeployment?.blockNumber),
      })
    } catch (e: any) {
      console.log('error:', e)
      toast({
        title: 'Tx failed',
        description: 'Error during the deployment process',
        status: 'error',
        position: 'bottom',
        variant: 'subtle',
        duration: 9000,
        isClosable: true,
      })
      setLoading(false)
    }
  }

  const handleDaoNameChange = (newName: any) => {
    setNftName(newName + ' Membership NFT')
    setDaoName(newName)
    setNftSymbol(newName.substring(0, 3).toUpperCase())
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleFirstMembersChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Split by either newlines or commas and clean up the addresses
    const addresses = e.target.value
      .split(/[\n,]/) // Split by newline or comma
      .map((addr) => addr.trim())
      .filter((addr) => addr !== '')
    setFirstMembers(addresses)
  }

  return (
    <>
      <Head />

      <main>
        {isDeployed !== '' ? (
          <>
            <Heading as="h3" size="lg">
              {daoName}
            </Heading>
            <br />
            <Heading as="h4" size="md">
              Governor
            </Heading>
            <br />

            <UnorderedList>
              <ListItem>
                Governor address: <strong>{daoInfo.govAddress}</strong>
              </ListItem>
              <ListItem>
                Network: <strong>{network ? network : 'Undetected network'}</strong>
              </ListItem>
              <ListItem>
                Type: <strong>Open Zeppelin Governor</strong>
              </ListItem>
              <ListItem>
                Start Block: <strong>{daoInfo.govBlock}</strong>
              </ListItem>
            </UnorderedList>
            <br />
            <Heading as="h4" size="md">
              Token
            </Heading>
            <br />

            <UnorderedList>
              <ListItem>
                Token address: <strong>{daoInfo.nftAddress}</strong>
              </ListItem>
              <ListItem>
                Type / DAO Standard: <strong>ERC721</strong>
              </ListItem>
              <ListItem>
                Start Block: <strong>{daoInfo.nftBlock}</strong>
              </ListItem>
            </UnorderedList>
            <br />
            <LinkComponent href="https://www.tally.xyz/add-a-dao">
              <Button mt={4} colorScheme="blue" variant="outline" type="submit">
                Add your DAO to Tally &nbsp; <ExternalLinkIcon />
              </Button>
            </LinkComponent>
          </>
        ) : (
          <>
            <Heading as="h2">Deploy your DAO</Heading>
            <br />{' '}
            {network === 'Unknown' ? (
              <>
                <p style={{ color: 'red' }}>Please connect your wallet.</p>
              </>
            ) : (
              <>
                <p>
                  You&apos;re about to deploy your own DAO to <strong>{network}</strong>. This means you will deploy <strong>two</strong> Solidity
                  contracts: a membership NFT contract (ERC-721) and a Governor contract. Once deployed, you&apos;ll be able to add it in Tally, which
                  provides fresh interface for your community so that everyone can submit proposals and polls, vote, handle the delegations, etc.
                </p>
                <br />
                <p>Your current wallet balance is {parseFloat(balance).toFixed(4)} ETH, and you actually need some ETH to deploy.</p>
                <LinkComponent href="https://www.tally.xyz/gov/web3-hackers-collective">
                  <Button mt={6} mb={6} colorScheme="purple" size="xs" variant="outline">
                    View an example on Tally
                  </Button>
                </LinkComponent>{' '}
                <p>
                  We highly recommend to{' '}
                  <LinkComponent href="https://w3hc.github.io/gov-docs/deployment.html#deployment">
                    <strong>read our docs</strong>
                  </LinkComponent>{' '}
                  and/or{' '}
                  <LinkComponent href="https://docs.tally.xyz/knowledge-base/dao-best-practices/running-an-onchain-dao-using-openzeppelin-governor">
                    <strong>Tally docs</strong>
                  </LinkComponent>{' '}
                  to learn more about about the best practices before you create your DAO. And if you don&apos;t feel super confortable in this
                  process, feel free to{' '}
                  <LinkComponent href="https://t.me/+5ih-ivs0VVM0NWU0">
                    <strong>ask us directly</strong>
                  </LinkComponent>
                  .
                </p>
              </>
            )}
            <br />
            <FormControl mt={4}>
              <FormLabel>DAO Name</FormLabel>
              <Input value={daoName} onChange={(e) => handleDaoNameChange(e.target.value)} placeholder="Our DAO" />
              <FormHelperText>Choose something that sounds good and eventually echoes your DAO mission statement.</FormHelperText>
              <br />
              <br />
              <FormLabel>Mission statement</FormLabel>
              <Textarea value={missionStatement} onChange={(e) => setMissionStatement(e.target.value)} placeholder={missionStatement} />
              <FormHelperText>
                Extremely important. It should probably begin with &quot;We want to&quot;. It will require a community vote to change it.
              </FormHelperText>
              <br />
              <br />
              <Textarea
                value={Array.isArray(firstMembers) ? firstMembers.join('\n') : firstMembers}
                onChange={handleFirstMembersChange}
                placeholder={address}
              />
              <FormHelperText>
                Enter Ethereum addresses, one per line. A membership NFT will be minted and sent to each address. These addresses will become the
                first members and share 100% of the initial voting power equally.{' '}
                <strong>By default, your connected wallet ({address}) will be the first member.</strong>
              </FormHelperText>
              <br />
              <br />
              <FormLabel>DAO Membership NFT image</FormLabel>
              <Input type="file" onChange={handleFileChange} />
              <FormHelperText>It will be the image of your membership NFT. It can be changed in the future.</FormHelperText>
              {!showAdvanced && (
                <>
                  <br />
                  <br />
                  <Button rightIcon={<ArrowDownIcon />} colorScheme="red" size="xs" onClick={() => setShowAdvanced(!showAdvanced)}>
                    Advanced
                  </Button>
                </>
              )}
              {showAdvanced && (
                <>
                  <br />
                  <br />

                  <FormLabel>Voting period</FormLabel>
                  <Input value={votingPeriod} onChange={(e) => setVotingPeriod(e.target.value)} placeholder={votingPeriod} />
                  <FormHelperText>Expressed in seconds. 1296000 seconds (15 days) is the default value.</FormHelperText>
                  <br />
                  <br />
                  <FormLabel>Voting delay</FormLabel>
                  <Input value={votingDelay} onChange={(e) => setVotingDelay(e.target.value)} placeholder={votingDelay} />
                  <FormHelperText>Number of seconds.</FormHelperText>
                  <br />
                  <br />
                  <FormLabel>Voting threshold</FormLabel>
                  <Input value={votingThreshold} onChange={(e) => setVotingThreshold(e.target.value)} placeholder={votingThreshold} />
                  <FormHelperText>
                    1 if you want only the members to be allowed to submit proposals, 0 if you allow non-members to submit proposals (can get spammy).{' '}
                  </FormHelperText>
                  <br />
                  <br />
                  <FormLabel>Quorum</FormLabel>
                  <Input value={quorum} onChange={(e) => setQuorum(e.target.value)} placeholder={quorum} />
                  <FormHelperText>The minimum participation rate required to make a proposal pass. The default value is 20%</FormHelperText>
                  <br />
                  <br />
                  <FormLabel>NFT name</FormLabel>
                  <Input value={nftName} onChange={(e) => setNftName(e.target.value)} placeholder={nftName} />
                  <FormHelperText>What&apos;s the name of the membership NFT?</FormHelperText>
                  <br />
                  <br />
                  <FormLabel>NFT symbol</FormLabel>
                  <Input value={nftSymbol} onChange={(e) => setNftSymbol(e.target.value)} placeholder={nftSymbol} />
                  <FormHelperText>What&apos;s the symbol of the membership NFT?</FormHelperText>
                  {showAdvanced && (
                    <>
                      <br />
                      <Button rightIcon={<ArrowUpIcon />} colorScheme="red" size="xs" onClick={() => setShowAdvanced(!showAdvanced)}>
                        Hide details
                      </Button>
                    </>
                  )}
                </>
              )}
            </FormControl>
            <br />
            {!loading ? (
              <Button mt={4} mb={20} colorScheme="blue" variant="outline" type="submit" onClick={deployDao}>
                Deploy
              </Button>
            ) : (
              <Button isLoading loadingText="Deploying..." mt={4} mb={20} colorScheme="blue" variant="outline" type="submit" onClick={deployDao}>
                Deploy
              </Button>
            )}
          </>
        )}
      </main>
    </>
  )
}
