import { createContext } from 'react';

interface GameState {
    level: number,
    setLevel: any,
    damage: number,
    clickDamage: number,
    setClickDamage: any,
    setDamage: any,
    money: number,
    setMoney: any,
    time: number,
    setTime: any,
}

const InitGameState: GameState = {
    level: 1,
    setLevel: () => {},
    damage: 1,
    setDamage: () => {},
    money: 1,
    setMoney: () => {},
    clickDamage: 1,
    setClickDamage: () => {},
    time: 0,
    setTime:  () => {},
}

export const GameState = createContext(
    InitGameState
    );
