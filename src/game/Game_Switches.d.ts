/// <reference path="../main.d.ts"/>
declare class Game_Switches {
	private _data: boolean[];
	
	constructor();
	initialize(): void;
	clear();
	value(switchId: number): boolean;
	setValue(switchId: number, value: boolean): void;
	onChange(): void;
	
}
