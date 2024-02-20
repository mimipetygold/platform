import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('AycSbQHwZigTuc3hKWbm9AAEszocbETzgWqpgbaoVubv')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("CJWRhMLr2GcSQrUaTLMhk3fpb8rBFmE6xkmnSui1bRd7"),
    symbol: 'MIMI',
    name: 'MimiPety',
    image: "https://bafybeihpwziqbs3mq2saoswbjvwh665v3rfreus3kqrtybxelwcj4ptmwi.ipfs.nftstorage.link",
    decimals: 6,
    baseWager: 1 * 1e6,
  }
]
