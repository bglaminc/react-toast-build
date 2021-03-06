import { WatchableStore } from "watchable-stores";
export interface IToastsStore {
    status: string;
    message: string;
    timer: number;
    classNames: string[] | string;
}
declare class Store extends WatchableStore<IToastsStore> {
    constructor();
    success(message: string, timer?: number, classNames?: string | string[]): void;
    info(message: string, timer?: number, classNames?: string | string[]): void;
    warning(message: string, timer?: number, classNames?: string | string[]): void;
    error(message: string, timer?: number, classNames?: string | string[]): void;
    private _toast;
}
export declare const ToastsStore: Store;
export {};
