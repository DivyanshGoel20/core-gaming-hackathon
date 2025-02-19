import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { WalletProvider } from './context/WalletContext';
import WalletConnect from './components/WalletConnect';
import GameSelection from './components/GameSelection';
import Faucet from './components/Faucet';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <WalletProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WalletConnect />} />
            <Route path="/games" element={<GameSelection />} />
            <Route path="/faucet" element={<Faucet />} />
          </Route>
        </Routes>
      </WalletProvider>
    </Router>
  );
}

export default App;