/// <reference path="../main.d.ts"/>
declare class Utils {
	static RPGMAKER_NAME: string;
	
	static isOptionValid(name: string): boolean;
	static isMobileDevice(): boolean;
	static isMobileSafari(): boolean;
	static isAndroidChrome(): boolean;
	static isNwjs(): boolean;
	static canReadGameFiles(): boolean;
	static rgbToCssColor(r: number, g: number, b: number): string;
	
}
