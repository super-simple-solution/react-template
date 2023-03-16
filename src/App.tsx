import { useState, useCallback } from "react";
import ConnectWalletButton from "./pages/ConnectWalletButton";

export default function App() {
  const [, setSelectedAddress] = useState<string>();

  const addressChanged = useCallback((address: string | undefined) => {
    setSelectedAddress(address);
  }, []);

  return (
    <div className="App">
      <h1>Connect with MetaMask Demo</h1>

      <ConnectWalletButton onChange={addressChanged} />
    </div>
  );
}