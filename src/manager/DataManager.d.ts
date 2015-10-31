/// <refernce path="../main.d.ts"/>
declare class DataManager {
	static _globalId: string;
	static _lastAccessedId: number;
	static _errorUrl: string;
	static _databaseFiles: { name: string; src: string; }[];
	
	static loadDatabase(): void;
	static loadDataFile(name: string, src: string): void;
	static isDatabaseLoaded(): boolean;
	static loadMapData(mapId: number): void;
	static makeEmptyMap(): void;
	static isMapLoaded(): boolean;
	static onLoad(object: {}): void;
	static extractMetadata(data: {}): void;
	static checkError(): void;
	static isBattleTest(): boolean;
	static isEventTest(): boolean;
	static isSkill(item: {}): boolean;
	static isItem(item: {}): boolean;
	static isWeapon(item: {}): boolean;
	static isArmor(item: {}): boolean;
	static createGameObjects(): void;
	static setupNewGame(): void;
	static setupBattleTest(): void;
	static setupEventTest(): void;
	static loadGlobalInfo(): {}[];
	static saveGlobalInfo(info: {}[]): void;
	static isThisGameFile(savefileId: number): boolean;
	static isAnySavefileExists(): boolean;
	static latestSavefileId(): number;
	static loadAllSavefileImages(): void;
	static loadSavefileImages(info: { character?: {}; faces?: {}; }): void;
	static maxSavefiles(): number;
	static saveGame(savefileId: number): boolean;
	static loadGame(savefileId: number): boolean;
	static loadSavefileInfo(savefileId: number): {};
	static lastAccessedSavefileId(): number;
	static saveGameWithoutRescue(savefileId: number): boolean;
	static loadGameWithoutRescue(savefileId: number): boolean;
	static selectSavefileForNewGame(): void;
	static makeSavefileInfo(): {};
	static makeSavefileContents(): {};
	static extractSavefileContents(contens: {}): void;
	
}