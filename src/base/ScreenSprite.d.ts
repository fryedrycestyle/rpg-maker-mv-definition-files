/// <reference path="../main.d.ts"/>
declare class ScreenSprite extends PIXI.Sprite {
	private _bitmap: Bitmap;
	private _red: number;
	private _green: number;
	private _blue: number;
	
	private _renderCanvas(renderSession: HTMLCanvasElement): void;
	
	public opacity: number;
	
	constructor();
	public setBlack(): void;
	public setWhite(): void;
	public setColor(r: number, g: number, b: number): void;
	
}