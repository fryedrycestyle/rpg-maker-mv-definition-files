/// <reference path="../main.d.ts"/>
declare class Scene_GameEnd extends Scene_MenuBase {
	private _commandWindow: Window_GameEnd;
	
	constructor();
	create();
	stop();
	createBackground(): void;
	createCommandWindow(): void;
	commandToTitle(): void;
}