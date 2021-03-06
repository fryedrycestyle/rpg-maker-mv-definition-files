/// <reference path="../main.d.ts"/>
declare class AudioManager {
	static _bgmVolume: number;
	static _bgsVolume: number;
	static _meVolume: number;
	static _seVolume: number;
	static _currentBgm: BGM;
	static _currentBgs: BGS;
	static _bgmBuffer: number;
	static _bgsBuffer: number;
	static _meBuffer: number;
	static _seBuffers: number[];
	static _staticBuffers: number[];
	static _replayFadeTime: number;
	static _path: string;
	static bgmVolume: number;
	static bgsVolume: number;
	static meVolume: number;
	static seVolume: number;
	
	static playBgm(bgm: {name: string;volume: number;pitch: number;pan: number;}, pos: number): void;
	static replayBgm(bgm: {name: string;volume: number;pitch: number;pan: number;}): void;
	static isCurrentBgm(bgm: {name: string;volume: number;pitch: number;pan: number;}): boolean;
	static updateBgmParameters(bgm: {name: string;volume: number;pitch: number;pan: number;}): void;
	static updateCurrentBgm(bgm: {name: string;volume: number;pitch: number;pan: number;}, pos: number): void;
	static fadeOutBgm(duration: number): void;
	static fadeInBgm(duration: number): void;
	static stopBgm(): void;
	static playBgs(bgs: {name: string;volume: number;pitch: number;pan: number;}, pos: number): void;
	static replayBgs(bgs: {name: string;volume: number;pitch: number;pan: number;}): void;
	static isCurrentBgs(bgs: {name: string;volume: number;pitch: number;pan: number;}): boolean;
	static updateBgsParameters(bgs: {name: string;volume: number;pitch: number;pan: number;}): void;
	static updateCurrentBgs(bgs: {name: string;volume: number;pitch: number;pan: number;}, pos: number): void;
	static fadeOutBgs(duration: number): void;
	static fadeInBgs(duration: number): void;
	static stopBgs(): void;
	static playMe(me: {name: string}): void;
	static updateMeParameters(me: {name: string}): void;
	static fadeOutMe(duration: number): void;
	static stopMe(): void;
	static playSe(se: {name: string}): void;
	static updateSeParameters(buffer, se: {name: string}): void;
	static stopSe(): void;
	static playStaticSe(se: {name: string}): void;
	static loadStaticSe(se: {name: string}): void;
	static isStaticSe(se: {name: string}): boolean;
	static stopAll(): void;
	static saveBgm(): {};
	static saveBgs(): {};
	static makeEmptyAudioObject(): {};
	static createBuffer(folder: string, name: string): Html5Audio;
	static createBuffer(folder: string, name: string): WebAudio;
	static updateBufferParameters(buffer: Html5Audio, configVolume: number, audio: {volume:number;pitch:number;pan:number}): void;
	static updateBufferParameters(buffer: WebAudio, configVolume: number, audio: {volume:number;pitch:number;pan:number}): void;
	static audioFileExt(): string;
	static shouldUseHtml5Audio(): boolean;
	static checkErrors(): void;
	static checkWebAudioErrors(webAudio: WebAudio): void;
	
}