export interface Item {
	id: string;
	name: string;
	quantity: number;
	price: number;
}

export type ItemDictionary = {
	[key: string]: Item;
};