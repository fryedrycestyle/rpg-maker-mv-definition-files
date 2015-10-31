declare class Scene_Gameover extends Scene_Base {
	private _backSprite: Sprite;
	
	constructor();
	create(): void;
	start(): void;
	update(): void;
	stop(): void;
	terminate(): void;
	playGameoverMusic(): void;
	createBackground(): void;
	isTriggered(): boolean;
	gotoTitle(): void;
}