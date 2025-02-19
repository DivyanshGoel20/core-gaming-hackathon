import React from 'react';
import { motion } from 'framer-motion';
import { Coins, ArrowDownToLine, ArrowUpFromLine, Gift } from 'lucide-react';
import useSound from 'use-sound';
import { Link } from 'react-router-dom';
import GameCard from './GameCard';
import Leaderboard from './Leaderboard';
import { useWallet } from '../context/WalletContext';
import toast from 'react-hot-toast';

const games = [
  {
    id: 'dice',
    name: 'Dice Roll',
    description: 'Test your luck with this classic dice game.',
    icon: '/games/dice.svg',
    path: '/games/dice',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80'
  },
  {
    id: 'coinflip',
    name: 'Coin Flip',
    description: 'Double your tokens with this simple game.',
    icon: '/games/coin.svg',
    path: '/games/coinflip',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80'
  },
  {
    id: 'slots',
    name: 'Core Slots',
    description: 'Spin to win with multiple paylines.',
    icon: '/games/slots.svg',
    path: '/games/slots',
    image: 'https://images.unsplash.com/photo-1596838132663-29c3e9c90c91?auto=format&fit=crop&q=80'
  },
  {
    id: 'roulette',
    name: 'Roulette',
    description: 'Place your bets and watch the wheel spin.',
    icon: '/games/roulette.svg',
    path: '/games/roulette',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80'
  },
  {
    id: 'blackjack',
    name: 'Blackjack',
    description: 'Beat the dealer to win big.',
    icon: '/games/blackjack.svg',
    path: '/games/blackjack',
    image: 'https://images.unsplash.com/photo-1601556123240-462c758a50db?auto=format&fit=crop&q=80'
  },
  {
    id: 'poker',
    name: 'Video Poker',
    description: 'Play poker against the machine.',
    icon: '/games/poker.svg',
    path: '/games/poker',
    image: 'https://images.unsplash.com/photo-1581956123035-bb7cd4997e75?auto=format&fit=crop&q=80'
  }
];

const GameSelection = () => {
  const [play] = useSound('/sounds/hover.mp3', { volume: 0.2 });
  const { wallet } = useWallet();

  const handleDeposit = () => {
    toast.success('Deposit feature coming soon!');
  };

  const handleWithdraw = () => {
    toast.success('Withdraw feature coming soon!');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-neon-pulse">Core Arcade</h1>
          <p className="text-gray-400">Play, Win, and Earn CORE Tokens</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#1A1A1A] rounded-lg p-4"
          >
            <div className="flex items-center gap-3">
              <Coins className="w-5 h-5 text-[#666]" />
              <div>
                <p className="text-[#666] text-sm">Balance</p>
                <p className="text-white font-medium">{wallet.balance} CORE</p>
              </div>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleDeposit}
            className="bg-[#1A1A1A] rounded-lg p-4 cursor-pointer hover:bg-[#222]"
          >
            <div className="flex items-center gap-3">
              <ArrowDownToLine className="w-5 h-5 text-[#666]" />
              <div>
                <p className="text-[#666] text-sm">Deposit</p>
                <p className="text-white font-medium">Add Funds</p>
              </div>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            onClick={handleWithdraw}
            className="bg-[#1A1A1A] rounded-lg p-4 cursor-pointer hover:bg-[#222]"
          >
            <div className="flex items-center gap-3">
              <ArrowUpFromLine className="w-5 h-5 text-[#666]" />
              <div>
                <p className="text-[#666] text-sm">Withdraw</p>
                <p className="text-white font-medium">Cash Out</p>
              </div>
            </div>
          </motion.button>

          <Link to="/faucet">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-[#1A1A1A] rounded-lg p-4 cursor-pointer hover:bg-[#222] h-full"
            >
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-[#666]" />
                <div>
                  <p className="text-[#666] text-sm">Faucet</p>
                  <p className="text-white font-medium">Get Free Tokens</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {games.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Leaderboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSelection;