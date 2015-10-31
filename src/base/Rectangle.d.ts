/// <reference path="../main.d.ts"/>
declare class Rectangle extends PIXI.Rectangle {
	constructor(x: number, y: number, width: number, height: number);
	static emptyRectangle(): Rectangle;
	
}