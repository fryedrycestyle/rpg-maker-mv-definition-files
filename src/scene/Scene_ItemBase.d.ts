declare class Scene_ItemBase extends Scene_MenuBase {
	private _actorWindow: Window_MenuActor;
	
	constructor();
	item(): any;
	user(): void;
	isCursorLeft(): boolean;
	showSubWindow(window): void;
	hideSubWindow(window): void;
	onActorOk(): void;
	onActorCancel(): void;
	determineItem(): void;
	useItem(): void;
	activateItemWindow(): void;
	itemTargetActors(): number[];
	canUse(): boolean;
	isItemEffectsValid(): boolean;
	applyItem(): void;
	checkCommonEvent(): void;
}