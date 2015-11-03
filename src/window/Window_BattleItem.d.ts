declare class Window_BattleItem extends Window_ItemList {
	constructor(x: number, y: number, width: number, height: number);
	includes(item: Game_Item): boolean;
	show(): void;
	hide(): void;
}