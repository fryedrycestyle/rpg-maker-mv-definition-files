declare class Scene_Equip extends Scene_MenuBase {
	private _statusWindow: Window_EquipStatus;
	private _commandWindow: Window_EquipCommand;
	private _slotWindow: Window_EquipSlot;
	private _itemWindow: Window_EquipItem;
	
	constructor();
	create(): void;
	createStatusWindow(): void;
	createCommandWindow(): void;
	createSlotWindow(): void;
	createItemWindow(): void;
	refreshActor(): void;
	commandEquip(): void;
	commandOptimize(): void;
	commandClear(): void;
	onSlotOk(): void;
	onSlotCancel(): void;
	onItemOk(): void;
	onItemCancel(): void;
	onActorChange(): void;
}