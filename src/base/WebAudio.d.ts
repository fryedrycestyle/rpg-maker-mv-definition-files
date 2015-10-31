/// <reference path="../main.d.ts"/>
declare class WebAudio {
	private static _createContext(): void;
	private static _detectCodecs(): void;
	private static _createMasterGainNode(): void;
	private static _setupEventHandlers(): void;
	private static _onTouchStart(): void;
	private static _onVisibilityChange(): void;
	private static _onHide(): void;
	private static _onShow(): void;
	private static _fadeIn(duration: number): void;
	private static _fadeOut(duration: number): void;
	
	public static initialize(noAudio: boolean): void;
	public static canPlayOgg(): boolean;
	public static canPlayM4a(): boolean;
	
	private _context: AudioContext;
	private _masterGainNode: GainNode;
	private _initialized: boolean;
	private _unlocked: boolean;
	private _buffer;
	private _sourceNode;
	private _gainNode;
	private _pannerNode;
	private _totalTime: number;
	private _sampleRate: number;
	private _loopStart: number;
	private _loopLength: number;
	private _startTime: number;
	private _volume: number;
	private _pitch: number;
	private _pan: number;
	private _endTimer: number;
	private _loadListeners: Function[];
	private _stopListeners: Function[];
	private _hasError: boolean;
	private _autoPlay: boolean;
	
	private _load(url: string): void;
	private _onXhrLoad(xhr: XMLHttpRequest): void;
	private _startPlaying(loop: boolean, offset: number): void;
	private _createNodes(): void;
	private _connectNodes(): void;
	private _removeNodes(): void;
	private _createEndTimer(): void;
	private _removeEndTimer(): void;
	private _updatePanner(): void;
	private _onLoad(): void;
	private _readLoopComments(array: string[]): void;
	private _readOgg(array: string[]): void;
	private _readMp4(array: string[]): void;
	private _readMetaData(array: string[], index: number, size: number): void;
	private _readLittleEndian(array: string[], index: number): number;
	private _readBigEndian(array: string[], index: number): number;
	private _readFourCharacters(array: string[], index: number): string;
	
	public url: string;
	public volume: number;
	public pitch: number;
	public pan: number;
	
	public clear(): void;
	public isReady(): boolean;
	public isError(): boolean;
	public isPlaying(): boolean;
	public stop(): void;
	public fadeIn(duration: number): void;
	public fadeOut(duration: number): void;
	public seek(): number;
	public addLoadListener(listener: Function): void;
	public addStopListener(listener: Function): void;
	
	constructor(url: string);
	
}