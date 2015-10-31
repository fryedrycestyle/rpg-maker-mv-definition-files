/// <reference path="../main.d.ts"/>
declare class TilingSprite extends PIXI.DisplayObjectContainer {
	private _bitmap: Bitmap;
	private _width: number;
	private _height: number;
	private _frame: Rectangle;
	
	private _onBitmapLoad(): void;
	private _refresh(): void;
	
	public origin: Point;
	public bitmap: Bitmap;
	public opacity: number;
		
	constructor(bitmap: Bitmap);
	public move(x: number, y: number, width: number, height: number): void;
	public setFrame(x: number, y: number, width: number, height: number): void;
	public updateTransform(): void;
	
}
