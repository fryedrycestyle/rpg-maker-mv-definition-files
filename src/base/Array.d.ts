/// <reference path="../main.d.ts"/>
declare module Array {
    function clone(): ArrayConstructor;
    function contains(element: any): boolean;
    function equals(array: ArrayConstructor): boolean;
}