import { Heading, Button, FormControl, FormLabel, Textarea, Input, FormHelperText, useToast, UnorderedList, ListItem } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Head } from '../components/layout/Head'
import { useState, useEffect } from 'react'
import { useSigner, useProvider, useNetwork, useAccount, useBalance } from 'wagmi'
import { ethers, ContractFactory } from 'ethers'
import { NFT_ABI, NFT_BYTECODE, GOV_ABI, GOV_BYTECODE } from '../utils/config'
import { UploadFile } from '../components/layout/UploadFile'
import { UploadData } from '../components/layout/UploadData'
import { UploadUserData } from '../components/layout/UploadUserData'
import { useRouter } from 'next/router'
import { LinkComponent } from '../components/layout/LinkComponent'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'

export default function Index() {
  const [loading, setLoading] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isDeployed, setIsDeployed] = useState('')
  const [daoName, setDaoName] = useState('Thistles Collective')
  const [missionStatement, setMissionStatement] = useState('We want to protect the thistles.')
  const [userBal, setUserbal] = useState(0)
  const [fileName, setFileName] = useState(null)
  const [votingPeriod, setVotingPeriod] = useState('10000')
  const [votingDelay, setVotingDelay] = useState('1')
  const [votingThreshold, setVotingThreshold] = useState('1')
  const [quorum, setQuorum] = useState('20')
  const [nftName, setNftName] = useState(daoName + ' Membership NFT')
  const [nftSymbol, setNftSymbol] = useState('THISTLES')
  const [nftAttributes, setNftAttributes] = useState('1')
  const [plaintext, setPlaintext] = useState(null)
  const [daoInfo, setDaoInfo] = useState({ govAddress: '', govBlock: 0, nftAddress: '', nftBlock: 0 })

  const router = useRouter()
  const { data: signer, isError, isLoading } = useSigner()
  const { chain } = useNetwork()
  const toast = useToast()

  const { address, isConnecting, isDisconnected } = useAccount()
  const { data } = useBalance({ address })

  const [firstMembers, setFirstMembers] = useState<any>([
    address,
    '0xD8a394e7d7894bDF2C57139fF17e5CBAa29Dd977',
    '0xe61A1a5278290B6520f0CEf3F2c71Ba70CF5cf4C',
  ])
  const provider = useProvider()

  useEffect(() => {
    if (isDeployed === '') {
      if (data) {
        setUserbal(Number(data.formatted))
      }
      setFirstMembers([address, '0xD8a394e7d7894bDF2C57139fF17e5CBAa29Dd977', '0xe61A1a5278290B6520f0CEf3F2c71Ba70CF5cf4C'])
    }
  }),
    []

  const deployDao = async (e: any) => {
    e.preventDefault()

    console.log('balance:', userBal)

    try {
      setLoading(true)
      console.log('Deployment started...')
      console.log('daoName:', daoName)
      console.log('missionStatement:', missionStatement)
      console.log('firstMembers:', firstMembers)
      console.log('fileName:', fileName)
      console.log('plaintext:', plaintext)
      console.log('votingPeriod:', votingPeriod)
      console.log('votingDelay:', votingDelay)
      console.log('votingThreshold:', votingThreshold)
      console.log('quorum:', quorum)
      console.log('nftName:', nftName)
      console.log('nftSymbol:', nftSymbol)
      console.log('nftAttributes:', nftAttributes)

      if (chain === undefined) {
        toast({
          title: 'Disconnected',
          description: 'Please connect your wallet first.',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
        return
      }

      if (userBal === 0) {
        toast({
          title: 'Insufficient funds',
          description:
            'Sorry, it seems like your wallet does not hold enough ETH to deploy your DAO. Any on-chain interaction requires a drop of ETH: this is how blockchains work. ',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        setLoading(false)
        return
      }

      const uri = await makeNftMetadata()

      console.log('chain:', chain)

      // Deploy the NFT contract
      const nftFactory = new ContractFactory(NFT_ABI, NFT_BYTECODE, signer as any)
      const nft = await nftFactory.deploy(firstMembers, uri, nftName, nftSymbol)
      console.log('tx:', nft.deployTransaction)
      console.log('NFT contract address:', nft.address)
      const nftDeployment = await nft.deployTransaction.wait(1)
      console.log('NFT contract deployed ✅')
      console.log('nft:', nft)
      console.log('nft.deployTransaction:', nft.deployTransaction)

      // Deploy the Gov contract
      const manifestoContent = '# ' + daoName + ' Manifesto ## Statement of intent ' + '**' + missionStatement + '**'
      const manifesto = UploadData(manifestoContent, 'manifesto.md')
      const govFactory = new ContractFactory(GOV_ABI, GOV_BYTECODE, signer as any)
      const gov = await govFactory.deploy(nft.address, manifesto, daoName, votingDelay, votingPeriod, votingThreshold, quorum)
      console.log('Gov deployment tx:', gov.deployTransaction)
      console.log('Gov contract address:', gov.address)
      const govDeployment = await gov.deployTransaction.wait(1)
      console.log('Gov contract deployed ✅')

      // Transfer ownership to the DAO
      const ownershipTransfer = await nft.transferOwnership(gov.address)
      const receipt = await ownershipTransfer.wait()
      console.log('\nNFT contract ownership transferred to the DAO', '✅')
      toast({
        title: 'Success!',
        description: 'Your DAO is deployed at ' + nft.address,
        status: 'success',
        duration: 20000,
        isClosable: true,
      })
      setLoading(false)
      setIsDeployed(gov.address)
      setDaoInfo({
        govAddress: gov.address,
        govBlock: govDeployment.blockNumber,
        nftAddress: nft.address,
        nftBlock: nftDeployment.blockNumber,
      })
    } catch (e: any) {
      console.log('error:', e)
      console.log('e.message:', e.message)
      toast({
        title: 'Tx failed',
        description: e.message,
        status: 'error',
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

  const makeNftMetadata = async () => {
    let nftImageCid: any

    console.log('[makeNftMetadata] plaintext:', plaintext)
    console.log('[makeNftMetadata] fileName:', fileName)

    if (fileName) {
      nftImageCid = await UploadFile(plaintext, fileName)
    } else {
      nftImageCid = 'https://bafybeichjaz2dxyvsinz2nx4ho4dmx3qkgvtkitymaeh7jsguhrpbknsru.ipfs.w3s.link/thistle-black-pixel.jpg'
    }
    console.log('[makeNftMetadata] nftImageCid:', nftImageCid)

    const metadata = {
      name: nftName,
      description: 'The owner of this NFT has a right to vote on the test DAO proposals.',
      image: nftImageCid,
      attributes: [
        {
          trait_type: 'Participation rate (%)',
          value: 'unset',
        },
        {
          trait_type: 'Contribs',
          value: 'unset',
        },
        {
          trait_type: 'DAO',
          value: 'unset',
        },
        {
          trait_type: 'Nickname',
          value: 'unset',
        },
        {
          trait_type: 'Role',
          value: 'unset',
        },
        {
          trait_type: 'Tally URL',
          value: 'unset',
        },
      ],
    }

    console.log('metadata:', metadata)

    return UploadData(metadata, 'metadata.json')
  }

  const handleFileChange = (event: any) => {
    const file = event
    setFileName(file.name)
    setPlaintext(file)
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
              {/* <ListItem>
                Network: <strong>{chain ? chain.name : 'Undetected network'}</strong>
              </ListItem> */}
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
            {chain ? (
              <>
                <p>
                  You&apos;re about to deploy your own DAO to <strong>{chain.name}</strong>. This means you&apos;ll deploy <strong>two</strong>{' '}
                  Solidity contracts: a membership NFT contract (ERC-721) and a Governor contract. Once deployed, you&apos;ll be able to add it in
                  Tally, meaning that you get a fresh interface for your community so that everyone can submit proposals and polls, vote, handle the
                  delegations, etc.
                </p>
                <LinkComponent target="blank" href="https://www.tally.xyz/gov/purple-thistles-co">
                  <Button mt={4} mb={4} colorScheme="purple" size="xs" variant="outline">
                    View an example on Tally
                  </Button>
                </LinkComponent>{' '}
                <p>
                  It is highly recommended to{' '}
                  <LinkComponent target="blank" href="https://w3hc.github.io/gov-docs/deployment.html#deployment">
                    <strong>read our docs</strong>
                  </LinkComponent>{' '}
                  and/or{' '}
                  <LinkComponent
                    target="blank"
                    href="https://docs.tally.xyz/knowledge-base/dao-best-practices/running-an-onchain-dao-using-openzeppelin-governor">
                    <strong>Tally docs</strong>
                  </LinkComponent>{' '}
                  to learn more about about the best practices before you create your DAO. And if you don&apos;t feel super confortable in this
                  process, feel free to{' '}
                  <LinkComponent target="blank" href="https://discord.com/invite/uSxzJp3J76">
                    <strong>ask us in Discord.</strong>
                  </LinkComponent>{' '}
                  We&apos;re available 24/7!
                </p>
              </>
            ) : (
              <>
                <p style={{ color: 'red' }}>Please connect your wallet.</p>
                <br />
              </>
            )}
            <br />
            <FormControl>
              <FormLabel>DAO Name</FormLabel>
              <Input value={daoName} onChange={(e) => handleDaoNameChange(e.target.value)} placeholder="Butterfly Collective" />
              <FormHelperText>Choose something that sounds good and also echoes your DAO mission statement.</FormHelperText>

              <br />
              <br />
              <FormLabel>Mission statement</FormLabel>
              <Textarea value={missionStatement} onChange={(e) => setMissionStatement(e.target.value)} placeholder={missionStatement} />
              <FormHelperText>
                Extremely important. It should probably begin with &quot;We want to&quot;. It will require a community vote to change it.
              </FormHelperText>

              <br />
              <br />
              <FormLabel>First members wallet adresses</FormLabel>
              <Input value={firstMembers} onChange={(e) => setFirstMembers(e.target.value)} placeholder={firstMembers} />
              <FormHelperText>
                These wallets will receive the membership NFT. These people will get 100% of the voting power so it probably shouldn&apos;t be random
                people.
              </FormHelperText>
              <br />
              <br />
              <FormLabel>DAO Membership NFT image</FormLabel>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                style={{ minWidth: '400px', width: '100%' }}
                onChange={(e) => {
                  handleFileChange(e.target.files[0])
                }}
              />
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
                  <FormHelperText>Be super careful with this one. It&apos;s a number of locks</FormHelperText>
                  <br />
                  <br />
                  <FormLabel>Voting delay</FormLabel>
                  <Input value={votingDelay} onChange={(e) => setVotingDelay(e.target.value)} placeholder={votingDelay} />
                  <FormHelperText>How many blocks before the voting period starts?</FormHelperText>
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
                  <FormHelperText>The minimum participation rate required to make a proposal pass.</FormHelperText>
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
                  {/* <br /> */}
                  <Link hidden href="/deploy">
                    Deploy
                  </Link>
                  {/* <FormLabel>Contribs (NFT attributes)</FormLabel>
              <Input value={nftAttributes} onChange={(e) => setNftAttributes(e.target.value)} placeholder={nftAttributes} />
              <FormHelperText>Only one attribute on this version. The membership NFT metadata can be edited in the future.</FormHelperText> */}
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
              <Button mt={4} colorScheme="blue" variant="outline" type="submit" onClick={deployDao}>
                Deploy
              </Button>
            ) : (
              <Button isLoading loadingText="Deploying..." mt={4} colorScheme="blue" variant="outline" type="submit" onClick={deployDao}>
                Deploy
              </Button>
            )}
          </>
        )}
      </main>
    </>
  )
}
