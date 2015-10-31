/// <reference path="main.d.ts"/>
interface Trait {
    code: number;
    dataId: number;
    value: number;
}
interface EventItem {
    code: number;
    indent: number;
    parameters: number[];
}
interface EnemyAction {
    conditionParam1: number;
    conditionParam2: number;
    conditionType: number;
    rating: number;
    skillId: number;
}
interface DropItem {
    dataId: number;
    denominator: number;
    kind: number;
}
interface Damage {
    critical: boolean;
    elementId: number;
    formula: string;
    type: number;
    variance: number
}
interface Effect {
    code: number;
    dataId: number;
    value1: number;
    value2: number;
}
interface BGM {
    name: string;
    pan: number;
    pitch: number;
    volume: number;
}
interface BGS {
    name: string;
    pan: number;
    pitch: number;
    volume: number;
}
interface DataActor {
	battlerName: string;
	characterIndex: number;
	characterName: string;
	classId: number;
	equips: number[];
	faceIndex: number;
	faceName: string;
	initialLevel: number;
	maxLevel: number;
	name: string;
	nickname: string;
	note: string;
	profile: string;
	traits: Trait[];
	
}
interface DataAnimation {
	animation1Hue: number;
	animation1Name: string;
	animation2Hue: number;
	animation2Name: string;
	frames: number[][];
	id: number;
	name: string;
	position: number;
	timings: number[];
	
}
interface DataArmor {
	atypeId: number;
	description: string;
	etypeId: number;
	iconIndex: number;
	id: number;
	name: string;
	note: string;
	params: number[];
	price: number;
	traits: Trait[];
	
}
interface DataClass {
	expParams: number[];
	id: number;
	learnings: {level: number;skillId: number;}[];
	name: string;
	note: string;
	params: number[][];
	traits: Trait[];
	
}
interface DataCommonEvent {
	id: number;
	list: EventItem[];
	name: string;
	switchId: number;
	trigger: number;
	
}
interface DataEnemy {
    actions: EnemyAction[];
	battlerHue: number;
	battlerName: string;
    dropItems: DropItem[];
	exp: number;
	gold: number;
	id: number;
	name: string;
	note: string;
	params: number[];
	traits: Trait[];
	
}
interface DataItem {
	animationId: number;
	consumable: boolean;
	damage: Damage;
	description: string;
	effects: Effect[];
	hitType: number;
	iconIndex: number;
	id: number;
	itypeId: number;
	meta: {};
	name: string;
	note: string;
	occasion: number;
	price: number;
	repeats: number;
	scope: number;
	speed: number;
	successRate: number;
	tpGain: number;
	
}
interface DataMap {
	autoplayBgm: boolean;
	autoplayBgs: boolean;
	battleback1Name: string;
	battleback2Name: string;
	bgm: BGM;
	bgs: BGS;
	data: number[];
	disableDashing: boolean;
	displayName: string;
	encounterList: number[];
	encounterStep: number;
	height: number;
	meta: {};
	note: string;
	parallaxLoopX: boolean;
	parallaxLoopY: boolean;
	parallaxName: string;
	parallaxShow: boolean;
	parallaxSx: number;
	parallaxSy: number;
	scrollType: number;
	specifyBattleback: boolean;
	tilesetId: number;
	width: number;
	
}
interface DataMapInfo {
	expanded: boolean;
	id: number;
	name: string;
	order: number;
	parentId: number;
	scrollX: number;
	scrollY: number;
	
}
interface DataSkill {
	animationId: number;
	damage: Damage;
	description: string;
	effects: Effect[];
	hitType: number;
	iconIndex: number;
	id: number;
	message1: string;
	message2: string;
	mpCost: number;
	name: string;
	note: string;
	occasion: number;
	repeats: number;
	requiredWtypeId1: number;
	requiredWtypeId2: number;
	scope: skillScope;
	stypeId: number;
	successRate: number;
	tpCost: number;
	tpGain: number;
	
}
interface DataState {
	autoRemovalTiming: number;
	chanceByDamage: number;
	iconIndex: number;
	id: number;
	maxTurns: number;
	message1: string;
	message2: string;
	message3: string;
	message4: string;
	minTurns: number;
	motion: number;
	name: string;
	note: string;
	overlay: number;
	priority: number;
	releaseByDamage: boolean;
	removeAtBattleEnd: boolean;
	removeByDamage: boolean;
	removeByRestriction: boolean;
	removeByWalking: boolean;
	restriction: number;
	stepsToRemove: number;
	traits: Trait[];
	
}
interface DataSystem {}
interface DataTileset {
	flags: number[];
	id: number;
	mode: number;
	name: string;
	note: string;
	tilesetNames: string[];
	
}
interface DataTroop {
	id: number;
	members: {
		enemyId: number;
		x: number;
		y: number;
		hidden: boolean;
	}[];
	name: string;
	pages: {
		conditions: {
			actorHp: number;
			actorId: number;
			actorValid: boolean;
			enemyHp: number;
			enemyIndex: number;
			enemyValid: boolean;
			switchId: number;
			turnA: number;
			turnB: number;
			turnEnding: boolean;
			turnValid: boolean;
		};
		list: EventItem[];
		span: number;
	}[];
	
}
interface DataWeapon {
	animationId: number;
	description: string;
	etypeId: number;
	iconIndex: number;
	id: number;
	name: string;
	note: string;
	params: number[];
	price: number;
	traits: Trait[];
	wtypeId: number;
	
}
interface DataPlugin {
	name: string;
	description: string;
	parameters: {};
	status: boolean;
}