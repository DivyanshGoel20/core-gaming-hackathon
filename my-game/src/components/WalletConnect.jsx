import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import useSound from 'use-sound';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';

const WalletConnect = () => {
  const [play] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const { wallet, connectWallet } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (wallet.connected) {
      navigate('/games');
    }
  }, [wallet.connected, navigate]);

  const handleConnect = async () => {
    play();
    await connectWallet();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4"
    >
      <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-purple-500/20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center"
        >
          <Wallet className="w-16 h-16 text-purple-400 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-4">Connect Wallet</h1>
          <p className="text-gray-300 text-center mb-8">
            Connect your Core wallet to start playing and earning tokens
          </p>
          <button
            onClick={handleConnect}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-8 rounded-lg
              hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
          >
            Connect MetaMask
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WalletConnect;