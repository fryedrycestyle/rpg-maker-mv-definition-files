/// <reference path="../main.d.ts"/>
declare class Window extends PIXI.DisplayObjectContainer { 
	
	private _isWindow: boolean;
	private _windowskin: {};
	private _width: number;
	private _height: number;
	private _cursorRect: Rectangle;
	private _opennes: number;
	private _animationCount: number;
	private _padding: number;
	private _margin: number;
	private _colorTone: number[];
	private _windowSpriteContainer: Sprite;
	private _windowBackSprite: Sprite;
	private _windowCursorSprite: Sprite;
	private _windowFrameSprite: Sprite;
	private _windowContentsSprite: Sprite;
	private _windowArrowSprites: Sprite[];
	
	public origin: Point;
	public active: boolean;
	public downArrowVisible: boolean;
	public pause: boolean;
	public windowskin: {};
	public contents: Bitmap;
	public width: number;
	public height: number;
	public padding: number;
	public margin: number;
	public opacity: number;
	public backOpacity: number;
	public contentsOpacity: number;
	public openness: number;
	
	private _createAllParts(): void;
	private _onWindowskinLoad(): void;
	private _refreshAllParts(): void;
	private _refreshBack(): void;
	private _refreshFrame(): void;
	private _refreshCursor(): void;
	private _refreshContents(): void;
	private _refreshArrows(): void;
	private _refreshPauseSign(): void;
	private _updateCursor(): void;
	private _updateContents(): void;
	private _updateArrows(): void;
	private _updatePauseSign(): void;
	
	public update(): void;
	public move(x?: number, y?: number, width?: number, height?: number): void;
	public isOpen(): boolean;
	public isClosed(): boolean;
	public setCursorRect(x?: number, y?: number, width?: number, height?: number): void;
	public setTone(r: number, g: number, b: number): void;
	public addChildToBack(child: PIXI.DisplayObject): PIXI.DisplayObject;
	public updateTransform(): void;
	
	constructor();
	
}