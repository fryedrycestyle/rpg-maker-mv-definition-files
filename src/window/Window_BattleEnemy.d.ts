declare class Window_BattleEnemy extends Window_Selectable {
	private _enemies: Game_Enemy[];
	public width: number;
	public height: number;
	
	constructor(x: number, y: number);
	windowWidth(): number;
	windowHeight(): number;
	numVisibleRows(): number;
	maxCols(): number;
	maxItems(): number;
	enemy(): Game_Enemy;
	enemyIndex(): number;
	drawItem(index: number): void;
	show(): void;
	hide(): void;
	refresh(): void;
	select(index: number): void;
}