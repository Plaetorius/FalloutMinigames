import React from "react";
import { fetchPlayerByID } from "@/services/playerService";
import Player from "@/types/PlayerType";

interface ProfileProps {
	username: string;
	id: string;
}

const Profile: React.FC<ProfileProps> = async ({
	username = "Player1", 
	id = "7275ab10-83ce-440d-b417-958cf1465c13",
}) => {
	{/* TODO Remove default values */}
	const player: Player = await fetchPlayerByID(id);
	console.log(player);
	
	return (
		<div className="flex items-center space-x-2">
			<p>{username}</p>
			<p>{id}</p>
		</div>
	)
}

export default Profile;