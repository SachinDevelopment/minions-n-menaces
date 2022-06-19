import { createContext } from 'react';

interface GameState {
    level: number,
    setLevel: any,
    damage: number,
    setDamage: any,
    money: number,
    setMoney: any,
}

const InitGameState: GameState = {
    level: 1,
    setLevel: () => {},
    damage: 1,
    setDamage: () => {},
    money: 1,
    setMoney: () => {},
}

export const GameState = createContext(
    InitGameState
    );
