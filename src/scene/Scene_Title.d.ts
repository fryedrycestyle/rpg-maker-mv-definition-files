/// <reference path="../main.d.ts"/>
declare class Scene_Title extends Scene_Base {
	constructor();
	
	private _commandWindow: Window_TitleCommand;
	
	create();
	start();
	update();
	isBusy(): boolean;
	terminate(): void;
	createBackground(): void;
	createForeground(): void;
	drawGameTitle(): void;
	centerSprite(): void;
	createCommandWindow(): void;
	commandNewGame(): void;
	commandContinue(): void;
	commandOptions(): void;
	playTitleMusic(): void;
	
}