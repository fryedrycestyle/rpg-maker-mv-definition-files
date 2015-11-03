declare class Window_BattleActor extends Window_BattleStatus {
	public x: number;
	public y: number;
	public openness: number;
	
	constructor(x: number, y: number);
	show(): void;
	hide(): void;
	select(index: number): void;
	actor(): Game_Actor;
}