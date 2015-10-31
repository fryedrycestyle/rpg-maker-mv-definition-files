/// <reference path="../main.d.ts"/>
declare class Scene_MenuBase extends Scene_Base {
	constructor();
	
	private _actor: Game_Actor;
	
	create();
	actor(): Game_Actor;
	updateActor(): void;
	createBackground(): void;
	setBackgroundOpacity(): void;
	createHelpWindow(): void;
	nextActor(): void;
	previousActor(): void;
	onActorChange(): void;
}