declare class Scene_Menu extends Scene_MenuBase {
	private _commandWindow: Window_MenuCommand;
	private _goldWindow: Window_Gold;
	private _statusWindow: Window_MenuStatus;
	
	constructor();
	create(): void;
	start(): void;
	createCommandWindow(): void;
	createGoldWindow(): void;
	createStatusWindow(): void;
	commandItem(): void;
	commandPersonal(): void;
	commandFormation(): void;
	commandOptions(): void;
	commandSave(): void;
	commandEndGame(): void;
	onPersonalOk(): void;
	onPersonalCancel(): void;
	onFormationOk(): void;
	onFormationCancel(): void;
}