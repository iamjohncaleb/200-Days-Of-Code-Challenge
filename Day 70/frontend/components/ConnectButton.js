import { useState, useEffect } from "react";
import { ethers } from "ethers";

const ConnectButton = ({ setWalletAddress, setProvider, setSigner }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      const checkConnection = async () => {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
      };
      checkConnection();
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
    setWalletAddress(account);
    setIsConnected(true);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setProvider(provider);
    setSigner(signer);
  };

  return (
    <button onClick={connectWallet} className="connect-button">
      {isConnected ? "Connected" : "Connect Wallet"}
    </button>
  );
};

export default ConnectButton;
