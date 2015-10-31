/// <reference path="../main.d.ts"/>
declare class PluginManager {
	static _path: string;
	static _scripts: string[];
	static _errorUrls: string[];
	static _parameters: {};
	
	static setup(plugins: DataPlugin[]): void;
	static checkErrors(): void;
	static parameters(pluginName: string): {};
	static setParameters(name: string, parameters: {}): void;
	static loadScript(name: string): void;
	static onError(e: Event): void;
	
}