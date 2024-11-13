import { PrismaClient, Prisma } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // TODO parse me 
    const { name }: { name: string } = req.body;

    try {
      const player = await prisma.player.create({
        data: { name } as Prisma.PlayerUncheckedCreateInput,
      });
      res.status(201).json(player);
    } catch (error) {
      console.error(`Error creating player: ${error}`);
      res.status(500).json({ error: "Failed to create player" });
    }
  } else if (req.method === "GET") {
    const { name } = req.query;

    if (!name || typeof name !== "string") {
      res.status(400).json({ error: "Valid player name required"})
    }

  // FIXME can't build 
  //   try {
  //     const player = await prisma.player.findUnique({
  //       where: { name },
  //     });

  //     if (!player) {
  //       res.status(404).json({ error: "Player not found" });
  //     } else {
  //       res.status(200).json(player);
  //     }
  //   } catch (error) {
  //     console.error(`Error retrieving player: ${error}`);
  //     res.status(500).json({ error: "Failed to retrieve player" });
  //   }
  } else { 
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}