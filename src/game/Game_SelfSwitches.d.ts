/// <reference path="../main.d.ts"/>
declare class Game_SelfSwitches {
	private _data: {};
	
	constructor();
	clear();
	value(key: string): boolean;
	setValue(key: string, value: boolean): void;
	onChange(): void;
	
}
