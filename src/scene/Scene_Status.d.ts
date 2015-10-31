/// <reference path="../main.d.ts"/>
declare class Scene_Status extends Scene_MenuBase {
	constructor();
	
	create();
	refreshActor(): void;
	onActorChange(): void;
}