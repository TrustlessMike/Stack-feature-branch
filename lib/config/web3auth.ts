import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

export let web3auth: Web3Auth | null = null;

export const initWeb3Auth = async (): Promise<Web3Auth | null> => {
  try {
    console.log("Starting Web3Auth initialization...");
    
    const response = await fetch('/api/get-web3auth-config');
    const { clientId } = await response.json();

    if (!clientId) {
      throw new Error("Web3Auth Client ID is not set in environment variables");
    }

    // Use clientId for Web3Auth initialization
    // ... (rest of your initialization code)

    // Create and initialize Web3Auth instance
    web3auth = new Web3Auth({
      clientId,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.SOLANA,
        chainId: "0x1", // This is the chainId for Solana mainnet
        rpcTarget: "https://api.mainnet-beta.solana.com", // RPC endpoint for Solana
      },
    });

    const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        network: "mainnet",
      },
    });

    web3auth.configureAdapter(openloginAdapter);

    await web3auth.initModal();

    console.log("Web3Auth initialized successfully");
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

    if (!web3auth.connected) {
      console.log("User not connected to Web3Auth, prompting login...");
      await web3auth.connect();
    }

    const web3authProvider = web3auth.provider;
    if (!web3authProvider) {
      console.log("No provider found after connection attempt");
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
