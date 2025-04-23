type EventNames = string[];
type PropNames = string[];
export declare function omiVueify(tagName: string, propNames?: PropNames, eventNames?: EventNames): import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, EventNames, string, import("vue").PublicProps, Readonly<{}> & Readonly<{
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}>, {
    [x: string]: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export {};
