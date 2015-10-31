/// <reference path="../main.d.ts"/>
declare class Scene_Options extends Scene_MenuBase {
	private _optionsWindow: Window_Options;
	
	constructor();
	create(): void;
	terminate(): void;
	createOptionsWindow(): void;
}