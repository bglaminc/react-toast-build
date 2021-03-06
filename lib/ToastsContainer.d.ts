import React = require("react");
import { Component } from "react";
import { WatchableStore } from "watchable-stores";
import { IToastsStore } from "./ToastsStore";
export declare enum ToastsContainerPosition {
    BOTTOM_CENTER = "bottom_center",
    BOTTOM_LEFT = "bottom_left",
    BOTTOM_RIGHT = "bottom_right",
    TOP_CENTER = "top_center",
    TOP_LEFT = "top_left",
    TOP_RIGHT = "top_right"
}
export interface IToastsContainerProps {
    position: ToastsContainerPosition;
    store: WatchableStore<IToastsStore>;
    lightBackground?: boolean;
    className?: string | string[];
}
export interface IToastsContainerState {
    styles: any;
    toasts: any[];
}
export declare class ToastsContainer extends Component<IToastsContainerProps, IToastsContainerState> {
    private storeSubscriptionId;
    constructor(props: IToastsContainerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
    private _renderContainer;
}
