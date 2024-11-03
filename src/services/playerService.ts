export async function fetchPlayerByID(id: string) {
	try {
		const response = await fetch(`/api/player/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch player with ID " + id);
		}

		const player = await response.json();
		return player;
	} catch (error) {
		console.log("Error fetching player:", error);
		throw error;
	}
}

export async function fetchPlayerByName(name: string) {
	try {
		const response = await fetch(`/api/player?name=${encodeURIComponent(name)}`);
		if (!response.ok) {
			throw new Error("No player found!");
		} else {
			const player = await response.json();
			return player;
		} 
	} catch (error) {
		console.log("Error fetching player:", error);
		throw error;
	}
}