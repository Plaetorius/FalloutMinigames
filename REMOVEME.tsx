// src/pages/api/player/[id].ts

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "PUT") {
    const { name, hp, xp, caps } = req.body;

    try {
      const player = await prisma.player.update({
        where: { id: id as string },
        data: { name, hp, xp, caps },
      });
      res.status(200).json(player);
    } catch (error) {
      res.status(500).json({ error: "Failed to update player" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// src/pages/api/player/[id].ts

import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const player = await prisma.player.findUnique({
        where: { id: id as string },
      });

      if (player) {
        res.status(200).json(player);
      } else {
        res.status(404).json({ error: "Player not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch player" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Example: Fetch a player by ID in a React component
import { useEffect, useState } from "react";

export default function PlayerComponent({ playerId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await fetch(`/api/player/${playerId}`);
      const data = await response.json();
      setPlayer(data);
    };

    fetchPlayer();
  }, [playerId]);

  if (!player) return <p>Loading...</p>;

  return (
    <div>
      <h1>{player.name}</h1>
      <p>HP: {player.hp}</p>
      <p>XP: {player.xp}</p>
      <p>Caps: {player.caps}</p>
    </div>
  );
}
