'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Player } from "@/types/PlayerType";
import { fetchPlayerByID, fetchPlayerByName } from "@/services/playerService";


export default function Home() {
  const [result, setResult] = useState<string>("");

  const [player, setPlayer] = useState<Player>({
    id: "1",
    name: "1",
    hp: 100,
    xp: 5,
    caps: 0,
  });

  async function showPlayerStats() {
    const id = "08907422-7177-42c9-b5cc-3b2141117651";
    const name = "Player1";

    try {
      const fetchedPlayer = await fetchPlayerByID(id);
      const namePlayer = await fetchPlayerByName(name);

      console.log(namePlayer);

      setPlayer(fetchedPlayer);
    } catch (error) {
      console.log("Error showing player stats:", error);
    }
  }

  function fight() {
    const a : number = Math.round(Math.random() * 20);
    const b : number = Math.round(Math.random() * 20);
    const answer = prompt(`What's ${a} × ${b}?`);
    if (answer !== null) {
      const resultValue = Number(answer) === a * b;
      if (resultValue) {
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          xp: prevPlayer.xp + 5,
        }));
        setResult(`Congrats! You gained 5 caps, caps are now ${player.caps}`);
      } else {
        setPlayer((prevPlayer) => ({
          ...prevPlayer,
          hp: prevPlayer.hp - 5,
        }));
        setResult(`No! Result is ${a * b}! You took 5 damage, HP is ${player.hp}`);
      }
    } else {
      setResult("No value provided");
    }
  }

  return (
    <div className="w-full">
      <Navbar>

      </Navbar>
      <main className="w-full h-screen flex justify-center items-center">
        <div className="border-8 p-2 border-orange-200 rounded-full">
          <button className="h-fit bg-blue-500 p-5 hover:bg-blue-400 active:bg-blue-600 rounded-full" onClick={fight}>
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
          <button className="bg-green-500 p-5" onClick={ showPlayerStats }>
            Stats
          </button>
        </div>
        <div>
          <button className="text-black bg-blue-100 p-5" onClick={ showPlayerStats }>
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
