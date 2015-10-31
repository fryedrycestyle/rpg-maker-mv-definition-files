/// <reference path="../main.d.ts"/>
declare class ImageManager {
	static _cache: {};
	
	static loadAnimation(filename: string, hue: number): Bitmap;
	static loadBattleback1(filename: string, hue: number): Bitmap;
	static loadBattleback2(filename: string, hue: number): Bitmap;
	static loadEnemy(filename: string, hue: number): Bitmap;
	static loadCharacter(filename: string, hue: number): Bitmap;
	static loadFace(filename: string, hue: number): Bitmap;
	static loadParallax(filename: string, hue: number): Bitmap;
	static loadPicture(filename: string, hue: number): Bitmap;
	static loadSvActor(filename: string, hue: number): Bitmap;
	static loadSvEnemy(filename: string, hue: number): Bitmap;
	static loadSystem(filename: string, hue: number): Bitmap;
	static loadTileset(filename: string, hue: number): Bitmap;
	static loadTitle1(filename: string, hue: number): Bitmap;
	static loadTitle2(filename: string, hue: number): Bitmap;
	static loadBitmap(folder: string, filename: string, hue: number, smooth: boolean): Bitmap;
	static loadEmptyBitmap(): Bitmap;
	static loadNormalBitmap(path: string, hue: number): Bitmap;
	static clear(): void;
	static isReady(): boolean;
	static isCharacterObject(filename: string): boolean;
	static isBigCharacter(filename: string): boolean;
	static isZeroParallax(filename: string): boolean;
	
}