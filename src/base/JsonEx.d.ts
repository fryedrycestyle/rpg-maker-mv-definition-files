/// <reference path="../main.d.ts"/>
declare class JsonEx {
	private static _encode(value: {}, depth?: number): {};
	private static _decode(value: {}): {};
	private static _getConstructorName(value: {}): string;
	private static _resetPrototype(value: {}, prototype: {}): {};
	
	public static maxDepth: number;
	
	public static stringify(object: {}): string;
	public static parse(json: string): {};
	public static makeDeepCopy(object: {}): string;
	
}