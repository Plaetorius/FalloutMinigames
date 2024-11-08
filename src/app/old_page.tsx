'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { usePlayer } from "@/context/PlayerContext";
import { fetchPlayerByID, fetchPlayerByName } from "@/services/playerService";
import useFight from "@/hooks/useFight";

export default function Home() {
  const { player } = usePlayer();
  const { result, startFight } = useFight();

  return (
    <div className="w-full">
      <Navbar>

      </Navbar>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="border-8 p-2 border-orange-200 rounded-full">
          <button
            className="h-fit bg-blue-500 p-5 hover:bg-blue-400 active:bg-blue-600 rounded-full"
            onClick={startFight}>
            <Image
              src="/images/characters/FoS_Old_Longfellow.webp"
              alt="Old Longfellow"
              width={35}
              height={100}
              className="h-fit"
            />
          </button>
        </div>

        <p>{result}</p>
        <div>
          <button className="bg-green-500 p-5">
            Stats
          </button>
        </div>
        <div>
          <button className="text-black bg-blue-100 p-5">
            Get by name
          </button>
        </div>
        <div>
          <h3>{player.name}</h3>
          <p>HP: {player.hp}</p>
          <p>XP: {player.xp}</p>
          <p>Caps: {player.caps}</p>
        </div>
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
