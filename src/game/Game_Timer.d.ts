/// <reference path="../main.d.ts"/>
declare class Game_Timer {
	private _frames: number;
	private _working: boolean;
	
	new(): Game_Timer;
	initialize(): void;
	update(sceneActive: boolean): void;
	start(count: number): void;
	stop(): void;
	isWorking(): boolean;
	seconds(): number;
	onExpire(): void;
	
}
