import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { SolanaWallet, SolanaPrivateKeyProvider } from "@web3auth/solana-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";

export let web3auth: Web3Auth | null = null;

export const initWeb3Auth = async (): Promise<Web3Auth | null> => {
  try {
    console.log("Starting Web3Auth initialization...");
    console.log("Environment:", process.env.NODE_ENV);
    console.log("All env variables:", process.env);
    
    const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID;
    console.log("Client ID:", clientId);

    if (!clientId) {
      throw new Error("Web3Auth Client ID is not set in environment variables");
    }

    // Solana Testnet Configuration
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.SOLANA,
      chainId: "0x2", // Solana Testnet
      rpcTarget: "https://api.testnet.solana.com",
      displayName: "Solana Testnet",
      blockExplorer: "https://explorer.solana.com",
      ticker: "SOL",
      tickerName: "Solana",
    };

    // Initialize the SolanaPrivateKeyProvider
    const privateKeyProvider = new SolanaPrivateKeyProvider({
      config: { chainConfig },
    });

    const web3AuthOptions = {
      clientId,
      chainConfig,
      web3AuthNetwork: "testnet" as const,
      privateKeyProvider,
    };

    // Initialize Web3Auth
    web3auth = new Web3Auth(web3AuthOptions);

    // Configure OpenloginAdapter before initializing Web3Auth modal
    const openloginAdapter = new OpenloginAdapter({
      adapterSettings: {
        network: "testnet",
        uxMode: "popup",
        loginConfig: {
          // Optional: Add your login methods here, e.g., Google, Facebook, etc.
        },
      },
    });
    // Add adapter configuration to Web3Auth
    web3auth.configureAdapter(openloginAdapter);

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
