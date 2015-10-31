/// <reference path="../main.d.ts"/>
declare class WindowLayer extends PIXI.DisplayObjectContainer { 
	private _width: number;
	private _height: number;
	private _tempCanvas: HTMLCanvasElement;
	private _vertexBuffer: {};
	private _translationMatrix: number[];
	private _dummySprite: Sprite;
	
	public width: number;
	public height: number;
	
	private _renderCanvas(renderSession: HTMLCanvasElement): void;
	private _canvasClearWindowRect(renderSession: HTMLCanvasElement, window: Window): void;
	private _renderWebGL(renderSession: HTMLCanvasElement): void;
	private _webglMaskOutside(renderSession: HTMLCanvasElement): void;
	private _webglMaskWindow(renderSession: HTMLCanvasElement, window: Window): void;
	private _webglMaskRect(renderSession: HTMLCanvasElement,x: number, y: number, w: number, h: number): void;
	
	public move(x: number, y: number, width: number, height: number): void;
	public update(): void;
	
	constructor();
	
}