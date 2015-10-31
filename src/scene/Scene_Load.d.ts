declare class Scene_Load extends Scene_File {
	private _loadSuccess: boolean;
	
	constructor();
	terminate(): void;
	mode(): string;
	helpWindowText(): string;
	firstSavefileIndex(): number;
	onSavefileOk(): void;
	onLoadSuccess(): void;
	onLoadFailure(): void;
	reloadMapIfUpdated(): void;
}