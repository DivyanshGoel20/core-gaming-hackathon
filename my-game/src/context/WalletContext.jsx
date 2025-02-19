import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

const WalletContext = createContext(undefined);

export const WalletProvider = ({ children }) => {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState({
    connected: false,
    address: null,
    balance: '0'
  });

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask to continue!');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      const balance = ethers.formatEther(await provider.getBalance(address));
      
      setWallet({
        connected: true,
        address,
        balance
      });

      toast.success('Wallet connected successfully!');
      navigate('/games');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error('Failed to connect wallet. Please try again.');
    }
  };

  const disconnectWallet = () => {
    setWallet({
      connected: false,
      address: null,
      balance: '0'
    });
    navigate('/');
    toast.success('Wallet disconnected');
  };

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};