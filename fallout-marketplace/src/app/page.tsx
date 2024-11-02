'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Player } from "@/types/PlayerType";


export default function Home() {
  const [result, setResult] = useState<string>("");

  const [player, setPlayer] = useState<Player>({
    id: "1",
    name: "1",
    hp: 100,
    xp: 5,
    caps: 0,
  });

  function fight() {
    const a : number = Math.round(Math.random() * 20);
    const b : number = Math.round(Math.random() * 20);
    const answer = prompt(`What's ${a} × ${b}?`);
    if (answer !== null) {
      const resultValue = Number(answer) === a * b;
      if (resultValue) {
        player.caps += 5;
        setResult(`Congrats! You gained 5 caps, caps are now ${player.caps}`);
      } else {
        player.hp -= 5;
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
      </main>
      <footer>
       
      </footer>
    </div>
  );
}
