'use client';

import React from "react";
import Starburst from "@/assets/svg/starburst.svg";
import Image from "next/image";
import Link from "next/link";

interface GameCardProps {
	title: string;
	description: string;
	link: string;
}

const GameCard: React.FC<GameCardProps> = ({ 
	title = "Default Title",
	description = "Default Description",
	link = "#", 
}) => {
	return (
		<Link href={link}>
			<div className="flex flex-col items-center w-96 bg-pyellow mx-auto p-6 text-center rounded-2xl mt-11
			transition-all duration-300 ease-in-out hover:bg-phyellow hover:scale-105">
				<h2 className="text-6xl text-pbrown font-advertising text-stroke-1">{title}</h2>
				<p className="text-xl text-white">{description}</p>

				<div className="relative flex justify-center items-center mt-2 w-32 h-32">
					
					<Starburst
						className="absolute inset-0 animate-spin-slow"
						width="100%"
						height="100%"
						/>

					<Image
						src="/icons/mininuke.png"
						alt="Old Longfellow"
						width={50}
						height={50}
						className="z-10"
						/>
				</div>
			</div>
		</Link>
	);
};

export default GameCard;
