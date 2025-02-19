import React from 'react';
import { Outlet } from 'react-router-dom';
import { Volume2, VolumeX, LogOut } from 'lucide-react';
import useSound from 'use-sound';
import { useWallet } from '../context/WalletContext';
import { motion } from 'framer-motion';

const Layout = () => {
  const [isMuted, setIsMuted] = React.useState(false);
  const { wallet, disconnectWallet } = useWallet();
  const [play, { stop }] = useSound('/sounds/background.mp3', { 
    volume: 0.1,
    loop: true 
  });

  React.useEffect(() => {
    if (!isMuted) {
      play();
    } else {
      stop();
    }
  }, [isMuted, play, stop]);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-900/90 before:via-blue-900/90 before:to-black/90">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        {wallet.connected && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={disconnectWallet}
            className="bg-red-500/30 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-red-500/50 transition-all flex items-center gap-2 border border-red-500/20"
          >
            <span className="text-white text-sm hidden md:inline">Disconnect</span>
            <LogOut className="w-5 h-5 text-white" />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black/30 backdrop-blur-sm p-2 rounded-full hover:bg-black/50 transition-all"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;