/// <reference path="../main.d.ts"/>
declare class Input {
	private static _currentState: {};
	private static _previousState: {};
	private static _gamepadStates: {}[];
	private static _latestButton: string;
	private static _pressedTime: number;
	private static _dir4: number;
	private static _dir8: number;
	private static _preferredAxis: string;
	private static _date: Date;
	
	private static _wrapNwjsAlert(): void;
	private static _setupEventHandlers(): void;
	private static _onKeyDown(event: Event): void;
	private static _shouldPreventDefault(keyCode: number): boolean;
	private static _onKeyUp(event: Event): void;
	private static _onFocusLost(): void;
	private static _pollGamepads(): void;
	private static _updateGamepadState(gamepad: Gamepad): void;
	private static _updateDirection(): void;
	private static _signX(): number;
	private static _signY(): number;
	private static _makeNumpadDirection(x: number, y: number): number;
	private static _isEscapeCompatible(keyName: string): boolean;
	
	public static keyRepeatWait: number;
	public static keyRepeatInterval: number;
	public static keyMapper: {};
	public static gamepadMapper: {};
	
	public static clear(): void;
	public static update(): void;
	public static isPressed(keyName: string): boolean;
	public static isTriggered(keyName: string): boolean;
	public static isRepeated(keyName: string): boolean;
	public static isLongPressed(keyName: string): boolean;
	
}
