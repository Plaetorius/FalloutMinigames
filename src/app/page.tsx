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
						Fallout Minigames
					</h1>
			</header>
			<main>
				<div className="main-wrapper w-full h-screen bg-pyellow relative z-10 border-pyellow box-border m-0 p-0">
					<div className="main-content w-full h-full bg-pdarkblue relative z-10 border-pdarkblue box-border m-auto p-auto">
						<GameCard title="Calculus" description="Ready to mathematically challenge yourself, Fallout fashion?"/>
					</div>
				</div>
			</main>
		</div>
	);
}
