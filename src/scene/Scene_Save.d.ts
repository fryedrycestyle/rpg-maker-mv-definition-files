declare class Scene_Save extends Scene_File {
	
	constructor();
	mode(): string;
	helpWindowText(): string;
	firstSavefileIndex(): number;
	onSavefileOk(): void;
	onSaveSuccess(): void;
	onSaveFailure(): void;
}