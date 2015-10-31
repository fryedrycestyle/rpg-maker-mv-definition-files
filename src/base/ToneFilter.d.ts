/// <reference path="../main.d.ts"/>
declare class ToneFilter extends PIXI.AbstractFilter {
	private _multiplyMatrix(matrix: number[]): void;
	
	public reset(): void;
	public adjustHue(value: number): void;
	public adjustSaturation(value: number): void;
	public adjustTone(r: number, g: number, b: number): void;
	
	constructor();
	
}