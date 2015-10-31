/// <reference path="../main.d.ts"/>
declare class Window_Base extends Window {
	static _iconWidth: number;
	static _iconHeight: number;
	static _faceWidth: number;
	static _faceHeight: number;
	
	contents: any;
	
	constructor();
	gaugeHeight(): number;
	lineHeight(): number;
	standardFontFace(): string;
	standardFontSize(): number;
	standardPadding(): number;
	standardBackOpacity(): number;
	textColor(value: number): string;
	normalColor(): string;
	systemColor(): string;
	crisisColor(): string;
	deathColor(): string;
	gaugeBackColor(): string;
	hpGaugeColor1(): string;
	hpGaugeColor2(): string;
	mpGaugeColor1(): string;
	mpGaugeColor2(): string;
	mpCostColor(): string;
	powerUpColor(): string;
	powerDownColor(): string;
	tpGaugeColor1(): string;
	tpGaugeColor2(): string;
	tpCostColor(): string;
	drawGauge(dx: number, dy: number, dw: number,rate: number, color1: any, color2: any): void;
	drawActorLevel(actor: IActor,x: number, y: number): void;
	drawCurrentAndMax(current: number, max: number, x: number, y: number, width: number, color1: any, color2: any): void;
	drawActorTp(actor: IActor, x: number, y: number, width: number): void;
	drawActorSimpleStatus(actor: IActor, x: number, y: number, width: number): void;
	drawCurrencyValue(value: number, unit: string, ex: number, wy: number, ww: number): void;
	drawItemName(item: IItem, x: number, y: number, width: number): void;
	usingGoldIcon(unit: string): boolean;
	translucentOpacity(): number;
	textWidth(text: string): number;
	changeTextColor(color: string): void;
	resetTextColor(): void;
	drawText(text: string, x: number, y: number,width: number, textAlign: textAlign): void;
}
