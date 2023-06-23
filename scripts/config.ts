import { ethers } from 'ethers'

export const rollupConfig = {
  confirmPeriodBlocks: ethers.BigNumber.from('45818'),
  extraChallengeTimeBlocks: ethers.BigNumber.from('200'),
  stakeToken: ethers.constants.AddressZero,
  baseStake: ethers.utils.parseEther('1'),
  wasmModuleRoot:
    '0xda4e3ad5e7feacb817c21c8d0220da7650fe9051ece68a3f0b1c5d38bbb27b21',
  owner: '0x1234123412341234123412341234123412341234',
  loserStakeEscrow: ethers.constants.AddressZero,
  chainId: ethers.BigNumber.from('1337'),
  chainConfig:
    '{"chainId":1337,"homesteadBlock":0,"daoForkBlock":null,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"muirGlacierBlock":0,"berlinBlock":0,"londonBlock":0,"clique":{"period":0,"epoch":0},"arbitrum":{"EnableArbOS":true,"AllowDebugPrecompiles":false,"DataAvailabilityCommittee":false,"InitialArbOSVersion":10,"InitialChainOwner":"0x1234123412341234123412341234123412341234","GenesisBlockNum":0}}',
  genesisBlockNum: ethers.BigNumber.from('0'),
  sequencerInboxMaxTimeVariation: {
    delayBlocks: ethers.BigNumber.from('5760'),
    futureBlocks: ethers.BigNumber.from('12'),
    delaySeconds: ethers.BigNumber.from('86400'),
    futureSeconds: ethers.BigNumber.from('3600'),
  },
}
