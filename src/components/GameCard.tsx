'use client';

import React from "react";

interface GameCardProps {
	title: string;
	description: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description }) => {
	return (
		<div className="w-96 bg-pyellow mx-auto p-6 text-center rounded-2xl mt-11
		transition-all duration-300 ease-in-out hover:bg-phyellow hover:scale-105">
			<h2 className="text-6xl text-pbrown font-advertising text-stroke-1">{title}</h2>
			<p className="text-xl text-white">{description}</p>
		</div>
	);
};

export default GameCard;