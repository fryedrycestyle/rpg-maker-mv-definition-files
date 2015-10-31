/// <reference path="../main.d.ts"/>
declare class Bitmap {
	private _canvas: HTMLCanvasElement;
	private _context: CanvasRenderingContext2D;
	private _baseTexture: PIXI.BaseTexture;
	private _image; Image;
	private _url: string;
	private _paintOpacity: number;
	private _smooth: boolean;
	private _loadListeners: Function[];
	private _isLoading: boolean;
	private _hasError: boolean;
	
	public baseTexture: PIXI.BaseTexture;
	public canvas: HTMLCanvasElement;
	public context: CanvasRenderingContext2D;
	public fontFace: string;
	public fontSize: number;
	public fontItalic: boolean;
	public height: number;
	public outlineColor: string;
	public outlineWidth: number;
	public paintOpacity: number;
	public rect: Rectangle;
	public smooth: boolean;
	public textColor: string;
	public url: string;
	public width: number;
	
	/**
	 * Returns a new bitmap
	 * 
	 * @param width Optional: if not given, a value of 1 is used.
	 * @param height Optional: if not given, a value of 1 is used.
	 */
	constructor(width?: number, height?: number);
	public isReady(): boolean;
	public isError(): boolean;
	public resize(width: number, height: number): void;
	public blt(source: Bitmap, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
	public getPixel(x: number, y: number): string;
	public getAlphaPixel(x: number, y: number): number;
	public clearRect(x: number, y: number, width: number, height: number): void;
	public clear(): void;
	public fillRect(x: number, y: number, width: number, height: number, color: string): void;
	public fillAll(color: string): void;
	public gradientFillRect(x: number, y: number, width: number, height: number, color1: string, color2: string, vertical: boolean): void;
	public drawCircle(x: number, y: number,radius: number, color: string): void;
	
	/**
	 * Draws the given text on the current bitmap.
	 * 
	 * @param text Text to draw.
	 * @param x X-Position.
	 * @param y Y-Position.
	 * @param maxWidth Maximal width of the text.
	 * @param lineHeight Line height.
	 * @param align One of them: left, center, right
	 * 
	 * @returns void
	 */
	public drawText(text: string, x: number, y: number, maxWidth: number, lineHeight: number, align: string): void;
	public measureTextWidth(text: string): number;
	public adjustTone(r: number, g: number, b: number): void;
	public rotateHue(offset: number): void;
	public blur(): void;
	public addLoadListener(callback: Function): void;
	private _makeFontNameText(): string;
	private _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): void;
	private _drawtextBody(text: string, tx: number, ty: number, maxWidth: number): void;
	private _onLoad(): void;
	private _callLoadListeners(): void;
	private _onError(): void;
	private _setDirty(): void;
	
	static load(url: string): Bitmap;
	static snap(stage: Stage): Bitmap;
	
}