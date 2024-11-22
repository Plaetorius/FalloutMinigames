import React from "react";
// import { fetchPlayerByID } from "@/services/playerService";
// import Player from "@/types/PlayerType";
import Image from "next/image";

interface ProfileProps {
	username: string;
	id: string;
}

const Profile: React.FC<ProfileProps> = ({
	username = "Player1", 
	id = "0b2c0cb7-a5d3-4fe7-9396-7319ac8c4e44",
}) => {
	{/* TODO Remove default values */}
	// const player: Player = await fetchPlayerByID(id);
	// console.log(player);

	// player.photo = player.photo || "/icons/mininuke.png";
	console.log(username);
	console.log(id);

	return (
		<div className="flex items-center space-x-2">
			<Image
				src={"/icons/mininuke.png"}
				alt={"Mininuke Icon"}
				width={100}
				height={100}
				className="rounded-full bg-green-500 p-5"
			/>
		</div>
	)
}

export default Profile;