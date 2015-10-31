/// <reference path="../main.d.ts"/>
declare class StorageManager {
	static save(savefileId: number, json: string): void;
	static load(savefileId: number): string;
	static exists(savefileId: number): boolean;
	static remove(savefileId: number): void;
	static isLocalMode(): boolean;
	static saveToLocalFile(savefileId: number, json: string): void;
	static loadFromLocalFile(savefileId: number): string;
	static localFileExists(savefileId: number): boolean;
	static removeLocalFile(savefileId: number): void;
	static saveToWebStorage(savefileId: number, json: string): void;
	static loadFromWebStorage(savefileId: number): string;
	static webStorageExists(savefileId: number): boolean;
	static removeWebStorage(savefileId: number): void;
	static loadlFileDirectoryPath(): string;
	static localFilePath(savefileId: number): string;
	static webStorageKey(savefileId: number): string;
	
}
