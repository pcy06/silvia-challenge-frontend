export enum GameIntensity {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD'
}

export enum GamePaywall {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM'
}

export enum GameStatus {
  ACTIVE = 'ACTIVE',
  HIDDEN = 'HIDDEN'
}

export interface Skill {
  name: string;
  description: string;
}

export interface Game {
  id: string;
  gameId: string;
  name: string;
  description: string;
  iconUrl: string;
  coverUrl: string;
  playDuration: number;
  status: GameStatus;
  intensity: GameIntensity;
  paywall: GamePaywall;
  relatedSkill: Skill;
}

interface SimplifiedGame {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  playDuration: number;
}

export interface GamesData {
  games: SimplifiedGame[];
}

export interface GameData {
  game: Game;
}