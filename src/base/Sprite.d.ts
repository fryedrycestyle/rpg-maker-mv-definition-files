/// <reference path="../main.d.ts"/>
declare class Sprite extends PIXI.Sprite {
	public static _counter: number;
	
	private _bitmap: Bitmap;
	private _frame: Rectangle;
	private _realFrame: Rectangle;
	private _offset: Point;
	private _blendColor: number[];
	private _colorTone: number[];
	private _canvas: HTMLCanvasElement;
	private _context: CanvasRenderingContext2D;
	private _tintTexture: PIXI.BaseTexture;
	
	private _onBitmapLoad(): void;
	private _refresh(): void;
	private _isInBitmapRect(x: number, y: number, w: number, h: number): boolean;
	private _needsTint(): boolean;
	private _createTinter(w: number, h: number): void;
	private _executeTint(x: number, y: number, w: number, h: number): void;
	private _renderWebGL(): void;
	
	public bitmap: Bitmap;
	public opaque: boolean;
	public spriteId: number;
	public width: number;
	public height: number;
	public opacity: number;
	
	constructor();
	public update(): void;
	public move(x: number, y: number): void;
	public setFrame(x: number, y: number, width: number, height: number): void;
	public getBlendColor(): number[];
	public setBlendColor(color: number[]): void;
	public getColorTone(): number[];
	public setColorTone(color: number[]): void;
	public updateTransform(): void;
}