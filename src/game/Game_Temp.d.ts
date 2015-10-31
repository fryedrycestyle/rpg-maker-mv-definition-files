/// <reference path="../main.d.ts"/>
declare class Game_Temp {
	private _isPlaytest: boolean;
	private _commonEventId: number;
	private _destinationX: number;
	private _destinationY: number;
	
	constructor();
	public isPlaytest(): boolean;
	public reserveCommonEvent(commonEventId: number): void;
	public clearCommonEvent(): void;
	public isCommonEventReserved(): boolean;
	public reservedCommonEvent(): DataCommonEvent;
	public setDestination(x: number, y: number):void;
	public clearDestination(): void;
	public isDestinationValid(): boolean;
	public destinationX(): number;
	public destinationY(): number;
	
}
