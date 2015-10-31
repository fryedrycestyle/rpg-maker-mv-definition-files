/// <reference path="../main.d.ts"/>
declare class ConfigManager {
	static alwaysDash: boolean;
	static commandRemember: boolean;
	static bgmVolume: number;
	static bgsVolume: number;
	static meVolume: number;
	static seVolume: number;
	
	static load(): void;
	static save(): void;
	static makeData(): {};
	static applyData(config: {}): void;
	static readFlag(config: {}, name: string): boolean;
	static readVolume(config: {}, name: string): number;
	
}