declare class Scene_File extends Scene_MenuBase {
	private _helpWindow: Window_Help;
	private _listWindow: Window_SavefileList;
	
	constructor();
	create(): void;
	start(): void;
	savefileId(): number;
	createHelpWindow(): void;
	createListWindow(): void;
	mode(): any;
	activateListWindow(): void;
	helpWindowText(): string;
	firstSavefileIndex(): number;
	onSavefileOk(): void;
}