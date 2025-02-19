import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const [play] = useSound('/sounds/hover.mp3', { volume: 0.2 });

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => play()}
      onClick={() => navigate(game.path)}
      className="bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer group"
    >
      <div className="relative aspect-[4/3]">
        <img 
          src={game.image} 
          alt={game.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#2A2A2A] p-2 rounded">
            <img src={game.icon} alt="" className="w-5 h-5" />
          </div>
          <h3 className="text-white font-medium">{game.name}</h3>
        </div>
        <p className="text-[#666] text-sm">{game.description}</p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full bg-[#2A2A2A] text-white py-2 rounded font-medium
            hover:bg-[#333] transition-colors"
        >
          Play Game
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameCard;