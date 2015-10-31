/// <reference path="../main.d.ts"/>
declare class Game_Variables {
	private _data: number[];
	
	constructor();
	clear(): void;
	value(variableId: number): number;
	setValue(variableId: number, value: number): void;
	onChange(): void;
}
