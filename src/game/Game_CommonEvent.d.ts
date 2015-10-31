/// <reference path="../main.d.ts"/>
declare class Game_CommonEvent {
	private _commonEventId: number;
	
	constructor(commonEventId: number);
	event(): DataCommonEvent;
	list(): EventItem[];
	refresh(): void;
	isActive(): boolean;
	update(): void;
	
}
