declare class Scene_Skill extends Scene_ItemBase {
	private _statusWindow: Window_SkillStatus;
	private _itemWindow: Window_SkillList;
	private _skillTypeWindow: Window_SkillType;
	
	constructor();
	create(): void;
	createSkillTypeWindow(): void;
	createStatusWindow(): void;
	createItemWindow(): void;
	refreshActor(): void;
	user(): any;
	commandSkill(): void;
	onItemOk(): void;
	onItemCancel(): void;
	playSeForItem(): void;
	useItem(): void;
	onActorChange(): void;
}