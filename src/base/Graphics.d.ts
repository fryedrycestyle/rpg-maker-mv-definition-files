/// <reference path="../main.d.ts"/>
declare class Graphics {
	private static _width: number;
	private static _height: number;
	private static _rendererType: string;
	private static _boxWidth: number;
	private static _boxHeight: number;
	private static _scale: number;
	private static _realScale: number;
	private static _errorPrinter: HTMLParagraphElement;
	private static _canvas: HTMLCanvasElement;
	private static _video: HTMLVideoElement;
	private static _upperCanvas: HTMLCanvasElement;
	private static _renderer: PIXI.WebGLRenderer;
	private static _fpsMeter: {};
	private static _modeBox: {};
	private static _skipCount: number;
	private static _maxSkip: number;
	private static _rendered: boolean;
	private static _loadingImage: HTMLImageElement;
	private static _loadingCount: number;
	private static _fpsMeterToggled: boolean;
	private static _canUseDifferenceBlend: boolean;
	private static _canUseSaturationBlend: boolean;
	private static _stretchEnabled: boolean;
	private static _hiddenCanvas: HTMLCanvasElement;
	
	private static _createAllElements(): void;
	private static _updateAllElements(): void;
	private static _updareRealScale(): void;
	private static _makeErrorHtml(name: string, message: string): string;
	private static _defaultStretchMode(): boolean;
	private static _testCanvasBlendMode(): void;
	private static _modifyExistingElements(): void;
	private static _createErrorPrinter(): void;
	private static _updateErrorPrinter(): void;
	private static _createCanvas(): void;
	private static _updateVideo(): void;
	private static _createUpperCanvas(): void;
	private static _updateUpperCanvas(): void;
	private static _clearUpperCanvas(): void;
	private static _paintUpperCanvas(): void;
	private static _createRenderer(): void;
	private static _updateRenderer(): void;
	private static _createFPSMeter(): void;
	private static _createModeBox(): void;
	private static _createGameFontLoader(): void;
	private static _createFontLoader(): void;
	private static _centerElement(element: HTMLElement): void;
	private static _disableTextSection(): void;
	private static _disableContextMenu(): void;
	private static _applyCanvasFilter(): void;
	private static _onVideoLoad(): void;
	private static _onVideoError(): void;
	private static _onVideoEnd(): void;
	private static _updateVisibility(videoVisible: boolean): void;
	private static _isVideoVisible(): boolean;
	private static _setupEventhandlers(): void;
	private static _onWindowResize(): void;
	private static _onKeyDown(): void;
	private static _switchFPSMeter(): void;
	private static _switchStretchMode(): void;
	private static _switchFullScreen(): void;
	private static _isFullScreen(): boolean;
	private static _requestFullScreen(): void;
	private static _cancelFullScreen(): void;
	
	public static frameCount: number;
	public static BLEND_NORMAL: number;
	public static BLEND_ADD: number;
	public static BLEND_MULTIPLY: number;
	public static BLEND_SCREEN: number;
	public static width: number;
	public static height: number;
	public static boxWidth: number;
	public static boxHeight: number;
	public static scale: number;
	
	public static tickStart(): void;
	public static tickEnd(): void;
	public static render(stage: Stage): void;
	public static isWebGL(): boolean;
	public static hasWebGL(): boolean;
	public static canUseDifferenceBlend(): boolean;
	public static canUseSaturationBlend(): boolean;
	public static setLoadingImage(): void;
	public static startLoading(): void;
	public static updateLoading(): void;
	public static endLoading(): void;
	public static printError(): void;
	public static showFps(): void;
	public static hideFps(): void;
	public static loadFont(name: string, url: string): void;
	public static isFontLoaded(name: string): boolean;
	public static playVideo(src: string): void;
	public static isVideoPlaying(): boolean;
	public static canPlayVideoType(type: string): boolean;
	public static pageToCanvasX(x: number): number;
	public static pageToCanvasY(y: number): number;
	public static isInsideCanvas(x: number, y: number): boolean;
	
}