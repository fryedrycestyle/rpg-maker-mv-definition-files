/// <reference path="../main.d.ts"/>
declare class LZString {
	static compressToBase64(e: string): string;
	static decompressFromBase64(e: string): string;
	static compressToUTF16(e: string): string;
	static decompressFromUTF16(e: string): string;
	static compressToUint8Array(e: string): string;
	static decompressFromUint8Array(e: string): string;
	static compressToEncodedURIComponent(e: string): string;
	static decompressFromEncodedURIComponent(e: string): string;
	static compress(e: string): string;
    static decompress(e: string): string;

}
