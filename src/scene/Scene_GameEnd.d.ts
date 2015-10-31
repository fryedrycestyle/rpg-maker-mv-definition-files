/// <reference path="../main.d.ts"/>
declare class Scene_GameEnd extends Scene_MenuBase {
	constructor();
	
	create();
	stop();
	createBackground(): void;
	createCommandWindow(): void;
	commandToTitle(): void;
}