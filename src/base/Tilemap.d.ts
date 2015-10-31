/// <reference path="../main.d.ts"/>
declare class Tilemap extends PIXI.DisplayObjectContainer {
	public static TILE_ID_B: number;
	public static TILE_ID_C: number;
	public static TILE_ID_D: number;
	public static TILE_ID_E: number;
	public static TILE_ID_A5: number;
	public static TILE_ID_A1: number;
	public static TILE_ID_A2: number;
	public static TILE_ID_A3: number;
	public static TILE_ID_A4: number;
	public static TILE_ID_MAX: number;
	public static FLOOR_AUTOTILE_TABLE: number[][][];
	public static WALL_ATUOTILE_TABLE: number[][][];
	public static WATERFALL_AUTOTILE_TABLE: number[][][];
	
	public static isVisibleTile(tileId: number): boolean;
	public static isAutotile(tileId: number): number;
	public static getAutotileKind(tileId: number): number;
	public static getAutotileShape(tileId: number): number;
	public static makeAutotileId(kind: number, shape: number): number;
	public static isSameKindTile(tileId1: number, tileId2: number): boolean;
	public static isTileA1(tileId: number): boolean;
	public static isTileA2(tileId: number): boolean;
	public static isTileA3(tileId: number): boolean;
	public static isTileA4(tileId: number): boolean;
	public static isTileA5(tileId: number): boolean;
	public static isWaterTile(tileId: number): boolean;
	public static isWaterfallTile(tileId: number): boolean;
	public static isGroundTile(tileId: number): boolean;
	public static isShadowingTile(tileId: number): boolean;
	public static isRoofTile(tileId: number): boolean;
	public static isWallTopTile(tileId: number): boolean;
	public static isWallSideTile(tileId: number): boolean;
	public static isWallTile(tileId: number): boolean;
	public static isFloorTypeAutotile(tileId: number): boolean;
	public static isWallTypeAutotile(tileId: number): boolean;
	public static isWaterfallTypeAutotile(tileId: number): boolean;
	
	private _margin: number;
	private _width: number;
	private _height: number;
	private _tileWidth: number;
	private _tileHeight: number;
	private _mapWidth: number;
	private _mapHeight: number;
	private _mapData: {};
	private _layerWidth: number;
	private _layerHeight: number;
	private _lastTiles: number[];
	
	private _createLayers(): void;
	private _updateLayerPositions(): void;
	private _paintAllTiles(startX: number, startY: number): void;
	private _paintTiles(startX: number, startY: number, x: number, y: number): void;
	private _readLastTiles(i: number, x: number, t: number): {}[];
	private _writeLastTiles(i: number, x: number, y: number,tiles: {}[]): void;
	private _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
	private _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
	private _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
	private _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): void;
	private _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): void;
	private _readMapData(x: number, y: number, z: number): number;
	private _isHigherTile(tileId: number): boolean;
	private _isTableTile(tileId: number): boolean;
	private _isOverpassPosition(mx: number, my: number): boolean;
	private _sortChildren(): void;
	private _compareChildOrder(a: {}, b: {}): number;
	
	public bitmaps: Bitmap[];
	public origin: Point;
	public flags: number[];
	public animationCount: number;
	public horizontalWrap: boolean;
	public verticalWrap: boolean;
	public width: number;
	public height: number;
	public tileWidth: number;
	public tileHeight: number;
	
	constructor(bitmap: Bitmap);
	public setData(width: number, height: number, data: {}): void;
	public isReady(): boolean;
	public update(): void;
	public refresh(): void;
	public updateTransform(): void;
	
	
}
