'use client';

import React from "react";

import GameCard from "@/components/GameCard";

export default function Home() {
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
						<GameCard title="Calculus" description="Ready to mathematically challenge yourself, Fallout fashion?" link="games/calculus"/>
					</div>
				</div>
			</main>
		</div>
	);
}
