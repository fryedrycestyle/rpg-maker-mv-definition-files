declare class Scene_Shop extends Scene_MenuBase {
	private _goods: any[];
	private _purchaseOnly: boolean;
	private _item: any;
	private _goldWindow: Window_Gold;
	private _dummyWindow: Window_Base;
	private _commandWindow: Window_ShopCommand;
	private _numberWindow: Window_ShopNumber;
	private _statusWindow: Window_ShopStatus;
	private _buyWindow: Window_ShopBuy;
	private _sellWindow: Window_ShopSell;
	private _categoryWindow: Window_ItemCategory;
	
	constructor();
	prepare(goods: any[], purchaseOnly: boolean): void;
	create(): void;
	createGoldWindow(): void;
	createCommandWindow(): void;
	createDummyWindow(): void;
	createNumberWindow(): void;
	createStatusWindow(): void;
	createBuyWindow(): void;
	createSellWindow(): void;
	createCategoryWindow(): void;
	activateBuyWindow(): void;
	activateSellWindow(): void;
	commandBuy(): void;
	commandSell(): void;
	onBuyOk(): void;
	onBuyCancel(): void;
	onCategoryOk(): void;
	onCategoryCancel(): void;
	onSellOk(): void;
	onSellCancel(): void;
	onNumberOk(): void;
	onNumberCancel(): void;
	doBuy(): void;
	doSell(): void;
	endNumberInput(): void;
	maxBuy(): number;
	maxSell(): number;
	money(): number;
	currencyUnit(): string;
	buyingPrice(): number;
	sellingPrice(): number;
}