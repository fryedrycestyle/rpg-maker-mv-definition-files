/// <reference path="../main.d.ts"/>
declare class Scene_Boot extends Scene_Base {
	constructor();
	
	private _startDate: Date;
	create(): void;
	loadSystemImages(): void;
	isReady(): boolean;
	isGameFontLoaded(): boolean;
	start();
	updateDocumentTitle(): void;
	checkPlayerLocation(): void;
}