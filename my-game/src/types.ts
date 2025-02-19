export interface Game {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  image: string;
}

export interface Player {
  address: string;
  username: string;
  earnings: number;
  rank: number;
}

export interface WalletState {
  connected: boolean;
  address: string | null;
  balance: string;
}