'use client';

import { createContext, useContext, useState, ReactNode } from "react";
import Player from "@/types/PlayerType";

interface PlayerContextType {
	player: Player;
	addHP: (amount: number) => void;
	addCaps: (amount: number) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
	const [player, setPlayer] = useState<Player>({
		id: "0b2c0cb7-a5d3-4fe7-9396-7319ac8c4e44",
		name: "Player1",
		hp: 100,
		xp: 5,
		caps: 0,
	});

	const addHP = (amount: number) => {
		setPlayer((prevPlayer: Player) => ({ ...prevPlayer, hp: prevPlayer.hp + amount }));
	};

	const addCaps = (amount: number) => {
		setPlayer((prevPlayer: Player) => ({...prevPlayer, caps: prevPlayer.caps + amount }));
	}

	return (
		<PlayerContext.Provider value={{ player, addHP, addCaps }}>
			{children}
		</PlayerContext.Provider>
	);
};

export const usePlayer = (): PlayerContextType => {
	const context = useContext(PlayerContext);
	if (!context) {
		throw new Error("usePlayer must be used within a PlayerProvider");
	}
	return context;
};
