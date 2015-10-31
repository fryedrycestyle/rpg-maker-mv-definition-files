/// <reference path="../main.d.ts"/>
declare class Scene_Base extends Stage {
	constructor();
	
	private _active: boolean;
	private _fadeSign: number;
	private _fadeDuration: number;
	private _fadeSprite: Sprite;
	
	create();
	isActive(): boolean;
	isReady(): boolean;
	start(): void;
	update(): void;
	stop(): void;
	isBusy(): boolean;
	terminate();
	createWindowLayer(): void;
	addWindow(window): void;
	startFadeIn(duration: number, white: boolean): void;
	startFadeOut(duration: number, white: boolean): void;
	createFadeSprite(white: boolean): void;
	updateFade(): void;
	updateChildren(): void;
	popScene(): void;
	checkGameover(): void;
	fadeOutAll(): void;
	fadeSpeed(): number;
	slowFadeSpeed(): number;
}