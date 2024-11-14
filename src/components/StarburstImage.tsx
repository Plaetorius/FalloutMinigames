'use client';

import React from "react";
import Starburst from "@/assets/svg/starburst.svg";
import Image from "next/image";

interface StarburstImageProps {
	color: string;
	image_path: string;
	image_alt: string;
}

const StarburstImage: React.FC<StarburstImageProps> = ({
	color = "#F7363C",
	image_path = "/icons/mininuke.png",
	image_alt = "Default Image",
}) => {
	return (
		<div className="relative w-24 h-24 transition-transform transform ease-in hover:scale-120">
			<Starburst 
				className={`absolute inset-0 animate-spin-slow fill-${color} z-0`}
				width="100%"
				height="100%"
			/>

			<Image
				src={image_path}
				alt={image_alt}
				width={50}
				height={50}
				className="absolute inset-0 m-auto z-10" />
		</div>
	)
};

export default StarburstImage;