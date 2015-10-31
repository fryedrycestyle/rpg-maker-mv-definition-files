declare class Scene_Debug extends Scene_MenuBase {
	private _rangeWindow: Window_DebugRange;
	private _editWindow: Window_DebugEdit;
	private _debugHelpWindow: Window_Base;
	
	constructor();
	create(): void;
	createRangeWindow(): void;
	createEditWindow(): void;
	createDebugHelpWindow(): void;
	onRangeOk(): void;
	onEditCancel(): void;
	refreshHelpWindow(): void;
	helpText(): string;
}