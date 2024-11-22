export default interface Player {
	id: string;
	name: string;
	hp: number;
	xp: number;
	caps: number;
	photo?: string;
}

// Distinction between Player and Profile, maybe merge later