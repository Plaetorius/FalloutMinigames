export async function fetchPlayerByID(id: string) {
	try {
		if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
			console.warn("Skipping fetch during build");
			return null;
		}

		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${baseUrl}/api/player/${id}`);

		if (!response.ok) {
			throw new Error("Failed to fetch player with ID " + id);
		}

		const player = await response.json();
		return player;
	} catch (error) {
		console.error("Error fetching player:", error);
		throw error;
	}
}

export async function fetchPlayerByName(name: string) {
	try {
		if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
			console.warn("Skipping fetch during build");
			return null;
		}
		
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${baseUrl}/api/player?name=${encodeURIComponent(name)}`);
		if (!response.ok) {
			throw new Error("No player found!");
		} else {
			const player = await response.json();
			return player;
		} 
	} catch (error) {
		console.error("Error fetching player:", error);
		throw error;
	}
}