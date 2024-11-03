import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

/*
08907422-7177-42c9-b5cc-3b2141117651
*/

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;

	if (typeof id !== "string") {
		return res.status(400).json({ error: "ID must be a string!"} )
	}

	if (req.method === "GET") {
		try {
			const player = await prisma.player.findUnique({
				where: { id },
			});
			if (player) {
				res.status(200).json(player);
			} else {
				res.status(404).json({ error: "No player with given ID" });
			}
		} catch (error) {
			res.status(500).json({ error: "Failed to fetch player" });
		}
	} else if (req.method === "PUT") {
		const { name, hp, xp, caps } = req.body;
		
		try {
			const player = await prisma.player.update({
				where: { id },
				data: {
					...(name && { name }),
					...(hp !== undefined && { hp }),
					...(xp !== undefined && { xp }),
					...(caps !== undefined && {caps }),
				},
			});
			res.status(200).json(player);
		} catch (error) {
			console.log("Error updating player");
			res.status(500).json({ error: "Error updating player" });
		}
	} else if (req.method === "DELETE") {
		try {
			await prisma.player.delete({
				where: { id },
			});
			
			res.status(204).end(); 
		} catch (error) {
			console.log("Error deleting player");
			res.status(500).json({ error: "Error deleting player" });
		}
	} else {
		res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}