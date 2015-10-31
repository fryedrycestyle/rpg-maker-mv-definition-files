declare class Scene_Name extends Scene_MenuBase {
	private _actorId: number;
	private _actor: Game_Actor;
	private _maxLength: number;
	private _editWindow: Window_NameEdit;
	private _inputWindow: Window_NameInput;
	
	constructor();
	prepare(): void;
	create(): void;
	start(): void;
	createEditWindow(): void;
	createInputWindow(): void;
	onInputOk(): void;
}