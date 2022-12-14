type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type HSL = `hsl(${number}, ${number}%, ${number}%)`;

type color = RGB | RGBA | HEX | HSL | string;

export type Appearance = {
	age: number;
	height: string;
	weight: string;
	eyes: color;
	skin: color;
	hair: color;
};

export type Bio = {
	name: string;
	class: string;
	level: number;
	background: string;
	alignment: string;
	xp: number;
	race: string;
	playerName: string;
	appearance: Appearance;
};

export type abilityScore = number;

export type abilityScores = {
	strength: number;
	dexterity: number;
	constitution: number;
	intelligence: number;
	wisdom: number;
	charisma: number;
};

export type UserData = {
	bio: Bio;
	abilityScores: abilityScores;
};
