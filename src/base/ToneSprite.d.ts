/// <reference path="../main.d.ts"/>
declare class ToneSprite extends PIXI.DisplayObject {
	private _renderCanvas(renderSession: HTMLCanvasElement): void;
	private _renderWebGL(renderSession: HTMLCanvasElement): void;
	
	public clear(): void;
	public setTone(r: number, g: number, b: number, gray: number): void;
	
	constructor();
}