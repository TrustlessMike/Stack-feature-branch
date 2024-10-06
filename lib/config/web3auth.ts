import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { SolanaWallet } from "@web3auth/solana-provider";
import { SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { IWeb3AuthModal } from "@web3auth/modal";

export let web3auth: IWeb3AuthModal | null = null;

export const initWeb3Auth = async () => {
  try {
    console.log("Starting Web3Auth initialization...");
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.SOLANA,
      chainId: "0x3", // Devnet
      rpcTarget: "https://api.devnet.solana.com",
      displayName: "Solana Devnet",
      blockExplorer: "https://explorer.solana.com/?cluster=devnet",
      ticker: "SOL",
      tickerName: "Solana",
    };

    const privateKeyProvider = new SolanaPrivateKeyProvider({
      config: { chainConfig }
    });

    web3auth = new Web3Auth({
      clientId: "BMQB_PFrWTuwRfJm_5Vq-MgsTVc_GaGlSajQlnkCcdT689sTflQk1xYhpTr7inuGboDjHHrchHD546x6HVqxXpI",
      web3AuthNetwork: "testnet",
      chainConfig,
      privateKeyProvider
    });

    console.log("Web3Auth instance created, initializing modal...");
    await web3auth.initModal();
    console.log("Web3Auth modal initialized successfully");

    return web3auth;
  } catch (error) {
    console.error("Error in initWeb3Auth:", error);
    throw error;
  }
};

export const getSolanaWallet = async (): Promise<SolanaWallet | null> => {
  try {
    console.log("Getting Solana wallet...");
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return null;
    }
    
    // Check if the user is already connected
    if (!web3auth.connected) {
      console.log("User not connected to Web3Auth");
      return null;
    }

    // If connected, get the provider without calling connect()
    const web3authProvider = web3auth.provider;
    if (!web3authProvider) {
      console.log("No provider found");
      return null;
    }
    
    const solanaWallet = new SolanaWallet(web3authProvider);
    console.log("Solana wallet created successfully");
    return solanaWallet;
  } catch (error) {
    console.error("Error in getSolanaWallet:", error);
    return null;
  }
};
