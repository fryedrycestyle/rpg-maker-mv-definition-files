/// <reference path="../main.d.ts"/>
declare class TouchInput {
	private static _mousePressed: boolean;
	private static _screenPressed: boolean;
	private static _pressedTime: number;
	private static _events: {
		triggered: boolean; cancelled: boolean; moved: boolean;
		released: boolean; wheelX: number; wheelY: number;
	};
	private static _triggered: boolean;
	private static _cancelled: boolean;
	private static _moved: boolean;
	private static _released: boolean;
	private static _wheelX: number;
	private static _wheelY: number;
	private static _x: number;
	private static _y: number;
	private static _date: Date;
	
	private static _setupEventHandlers(): void;
	private static _onMouseDown(event: Event): void;
	private static _onLeftButtonDown(event: Event): void;
	private static _onMiddleButtonDown(event: Event): void;
	private static _onMouseMove(event: Event): void;
	private static _onMouseUp(event: Event): void;
	private static _onWheel(event: Event): void;
	private static _onTouchStart(event: Event): void;
	private static _onTouchMove(event: Event): void;
	private static _onTouchEnd(event: Event): void;
	private static _onTouchCancel(event: Event): void;
	private static _onPointerDown(event: Event): void;
	private static _onTrigger(x: number, y: number): void;
	private static _oncancel(x: number, y: number): void;
	private static _onMove(x: number, y: number): void;
	private static _onRelease(x: number, y: number): void;
	
	public static wheelX: number;
	public static wheelY: number;
	public static x: number;
	public static y: number;
	public static date: Date;
	
	public static update(): void;
	public static isPressed(): boolean;
	public static isTriggered(): boolean;
	public static isRepeated(): boolean;
	public static isLongPressed(): boolean;
	public static isCancelled(): boolean;
	public static isMoved(): boolean;
	public static isReleased(): boolean;
}