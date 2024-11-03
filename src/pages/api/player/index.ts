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
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}