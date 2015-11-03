declare class Window_ActorCommand extends Window_Command {
	private _actor = Game_Actor;
	public openness: number;
	
	constructor();
	windowWidth(): number;
	numVisibleRows(): number;
	makeCommandList(): void;
	addAttackCommand(): void;
	addSkillCommands(): void;
	addGuardCommand(): void;
	addItemCommand(): void;
	setup(actor: Game_Actor): void;
	processOk(): void;
	selectLast(): void;
}