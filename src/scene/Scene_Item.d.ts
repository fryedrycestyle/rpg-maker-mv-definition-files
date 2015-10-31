declare class Scene_Item extends Scene_ItemBase {
	private _categoryWindow: Window_ItemCategory;
	private _itemWindow: Window_ItemList;
	
	constructor();
	create(): void;
	createCategoryWindow(): void;
	createItemWindow(): void;
	user(): any;
	onCategoryOk(): void;
	onItemOk(): void;
	onItemCancel(): void;
	playSeForItem(): void;
	useItem(): void;
}