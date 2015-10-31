/// <reference path="../main.d.ts"/>
declare class Weather extends PIXI.DisplayObjectContainer {
	private _width: number;
	private _height: number;
	private _sprites: Sprite[];
	
	public type: string;
	public power: number;
	public origin: Point;
	
	private _createBitmaps(): void;
	private _createDimmer(): void;
	private _updateDimmer();
	private _updateAllSprites(): void;
	private _addSprite(): void;
	private _removeSprite(): void;
	private _updateRainSprite(sprite: Sprite): void;
	private _updateStormSprite(sprite: Sprite): void;
	private _updateSnowSprite(sprite: Sprite): void;
	private _rebornSprite(sprite: Sprite): void;
	
	public update(): void;
	
	constructor();
	
}