import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Coins } from 'lucide-react';

const mockPlayers = [
  { address: '0x1234...5678', username: 'CryptoKing', earnings: 15000, rank: 1 },
  { address: '0x8765...4321', username: 'TokenMaster', earnings: 12000, rank: 2 },
  { address: '0x9876...5432', username: 'ArcadeChamp', earnings: 9000, rank: 3 },
  { address: '0x5432...8765', username: 'LuckyPlayer', earnings: 7500, rank: 4 },
  { address: '0x6789...0123', username: 'GameWizard', earnings: 6000, rank: 5 }
];

const Leaderboard = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-4">
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-5 h-5 text-[#666]" />
        <h2 className="text-white font-medium">Top Players</h2>
      </div>

      <div className="space-y-3">
        {mockPlayers.map((player) => (
          <motion.div
            key={player.address}
            whileHover={{ scale: 1.02 }}
            className="bg-[#2A2A2A] rounded p-3 flex items-center gap-3"
          >
            <div className="w-6 h-6 bg-[#333] rounded flex items-center justify-center text-sm text-[#666]">
              {player.rank}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{player.username}</p>
              <p className="text-[#666] text-sm truncate">{player.address}</p>
            </div>
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#666]" />
              <span className="text-white font-medium">{player.earnings.toLocaleString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;