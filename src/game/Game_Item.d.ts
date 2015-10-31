/// <reference path="../main.d.ts"/>
declare class Game_Item {
	private _dataClass: string;
	private _itemId: number;
	
	new(item: {}): void;
	initialize(): void;
	isSkill(): boolean;
	isItem(): boolean;
	isUsableItem(): boolean;
	isWeapon(): boolean;
	isArmor(): boolean;
	isEquipItem(): boolean;
	isNull(): boolean;
	itemId(): number;
	object(): {};
	setObject(item: {}): void;
	setEquip(isWeapon: boolean, itemId: number): void;
	
}
