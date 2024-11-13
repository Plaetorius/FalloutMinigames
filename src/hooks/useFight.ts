import { usePlayer } from "@/context/PlayerContext";
import { useState } from "react";

interface useFightReturn {
	result: string;
	startFight: () => Promise<void>;
}

export default function useFight() {
	const { player, addHP, addCaps } = usePlayer();
	const [result, setResult] = useState<string>("");

	async function startFight() {

		const a : number = Math.round(Math.random() * 20);
		const b : number = Math.round(Math.random() * 20);
		const capsReward: number = Math.round(Math.random() * 8)
		const answer = await promptUser(`What's ${a} × ${b}?`);
		if (answer !== null) {
			const isCorrect = Number(answer) === a * b;
			
			if (isCorrect) {
				addCaps(capsReward);
				setResult(`Congrats! You gained ${capsReward} caps, caps are now ${player.caps + capsReward}`);
			} else {
				addHP(-5);
				setResult(`Incorrect answer! Correct result was ${a * b}`);
			}
		} else {
			setResult("No answer provided");
		}
	}

	return ({result, startFight});
}

async function promptUser(question: string): Promise<string | null> {
	return new Promise((resolve) => {
		const answer = prompt(question);
		resolve(answer);
	});
}