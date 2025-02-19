import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coins, ArrowLeft } from 'lucide-react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import toast from 'react-hot-toast';

const Faucet = () => {
  const [play] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const { wallet } = useWallet();
  const [isClaiming, setIsClaiming] = useState(false);
  const [lastClaim, setLastClaim] = useState(null);

  const handleClaim = async () => {
    if (!wallet.connected) {
      toast.error('Please connect your wallet first!');
      return;
    }

    if (lastClaim && Date.now() - lastClaim.getTime() < 24 * 60 * 60 * 1000) {
      toast.error('You can only claim once every 24 hours!');
      return;
    }

    setIsClaiming(true);
    play();

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Implement actual faucet claim logic here
      setLastClaim(new Date());
      toast.success('Successfully claimed 10 CORE tokens!');
    } catch (error) {
      toast.error('Failed to claim tokens. Please try again later.');
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className="min-h-screen p-8 pt-20">
      <div className="max-w-2xl mx-auto">
        <Link to="/games">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Games</span>
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-500/20 p-4 rounded-xl">
              <Coins className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Token Faucet</h1>
              <p className="text-gray-300">Claim free CORE tokens to start playing!</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Your Wallet</h3>
              <p className="text-gray-300 font-mono">{wallet.address || 'Not connected'}</p>
              <p className="text-lg font-bold text-purple-400 mt-2">
                Balance: {wallet.balance} CORE
              </p>
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Claim Rules</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• You can claim 10 CORE tokens every 24 hours</li>
                <li>• Tokens will be sent directly to your connected wallet</li>
                <li>• You must have a Core wallet connected to claim</li>
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleClaim}
              disabled={isClaiming || !wallet.connected}
              className={`w-full py-4 rounded-xl font-bold text-white text-lg
                ${isClaiming || !wallet.connected
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                } transition-all duration-200 shadow-lg hover:shadow-purple-500/20`}
            >
              {isClaiming ? 'Claiming...' : 'Claim 10 CORE'}
            </motion.button>

            {lastClaim && (
              <p className="text-center text-gray-400">
                Last claimed: {lastClaim.toLocaleString()}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faucet;