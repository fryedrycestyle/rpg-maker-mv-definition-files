/// <reference path="../main.d.ts"/>
declare class Scene_Status extends Scene_MenuBase {
	private _statusWindow: Window_Status;
	
	constructor();
	create(): void;;
	refreshActor(): void;
	onActorChange(): void;
}