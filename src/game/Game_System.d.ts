/// <reference path="../main.d.ts"/>
declare class Game_System {
	private _saveEnabled: boolean;
	private _menuEnabled: boolean;
	private _encounterEnabled: boolean;
	private _formationEnabled: boolean;
	private _battleCount: number;
	private _winCount: number;
	private _escapeCount: number;
	private _saveCount: number;
	private _versionId: number;
	private _framesOnSave: number;
	private _bgmOnSave: {};
	private _bgsOnSave: {};
	private _windowTone: number[];
	private _battleBgm: {};
	private _victoryMe: {};
	private _defeatMe: {};
	private _savedBgm: {};
	private _walkingBgm: {};
	
	constructor();
	initialize(): void;
	isJapanese(): boolean;
	isChinese(): boolean;
	isKorean(): boolean;
	isCJK(): boolean;
	isRussian(): boolean;
	isSideView(): boolean;
	isSaveEnabled(): boolean;
	disabledSave(): void;
	enabledSave(): void;
	isMenuEnabled(): boolean;
	disableMenu(): void;
	enableMenu(): void;
	isEncounterEnabled(): boolean;
	disableEncounter(): void;
	enableEncounter(): void;
	isFormationEnabled(): boolean;
	disableFormation(): void;
	enableFormation(): void;
	battleCount(): number;
	winCount(): number;
	escapeCount(): number;
	saveCount(): number;
	versionId(): number;
	windowTone(): number[];
	setWindowTone(value: number[]): void;
	battleBgm(): {};
	setBattleBgm(value: {}): void;
	victoryMe(): {};
	setVictoryMe(value: {}): void;
	defeatMe(): {};
	setDefeatMe(value: {}): void;
	onBattleStart(): void;
	onBattleWin(): void;
	onBattleEscape(): void;
	onBeforeSave(): void;
	onAfterLoad(): void;
	playtime(): number;
	plattimeText(): string;
	saveBgm(): void;
	replayBgm(): void;
	saveWalkingBgm(): void;
	replayWalkingBgm(): void;
	
}
