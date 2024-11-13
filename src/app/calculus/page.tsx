'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { fetchPlayerByID, fetchPlayerByName } from "@/services/playerService";
import useFight from "@/hooks/useFight";
import GameCard from "@/components/GameCard";

export default function Home() {
  const { player } = usePlayer();
  const { result, startFight } = useFight();

	return (
		<div className="w-full h-screen bg-white">
			<header className="w-full h-96 text-[200px] flex justify-center items-center sticky top-0 z-0 text-pyellow">
					<h1>
						Calculus
					</h1>
			</header>
			<main>
				<div className="main-wrapper w-full h-screen bg-pyellow relative z-10 border-pyellow box-border m-0 p-0">
					<div className="main-content w-full h-full bg-pdarkblue relative z-10 border-pdarkblue box-border m-auto p-auto flex items-center align-center text-white">
						<button onClick={startFight} className="p-5">
							Start a fight
						</button>
						<div className="p-5">
							<h3>Results</h3>
							<p>{result}</p>
						</div>
						<div className="p-5">
							<h3>{player.name}</h3>
							<p>HP: {player.hp}</p>
							<p>XP: {player.xp}</p>
							<p>Caps: {player.caps}</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
