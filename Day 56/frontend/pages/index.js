import { useState } from "react";
import ConnectButton from "../components/ConnectButton";
import Navbar from "../components/Navbar";
import InsuranceActions from "../components/InsuranceActions";
import { ethers } from "ethers";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  return (
    <div className="container">
      <Navbar />
      {!walletAddress ? (
        <ConnectButton
          setWalletAddress={setWalletAddress}
          setProvider={setProvider}
          setSigner={setSigner}
        />
      ) : (
        <InsuranceActions signer={signer} walletAddress={walletAddress} />
      )}
    </div>
  );
}
