// Type definitions for Omi v1.2.2
// Project: https://github.com/AlloyTeam/omi

///////////////////////////////////////////////////////////////////////////////
// Omi module (omi.js)
///////////////////////////////////////////////////////////////////////////////

declare namespace Omi {
    /*
     * Create an instance of the Omi.Component .
     *
     * Examples:
     *      export default Hello extends Omi.Component{}
     */
    interface ComponentOption{
        server: boolean;
        ignoreStoreData: boolean;
        preventSelfUpdate: boolean;
        selfDataFirst: boolean;
        domDiffDisabled: boolean;
        scopedSelfCSS: boolean
        [propName: string]: any;
    }

    /*
     *   It should be noted that the installed will be executed during the instantiation, which is not shown above.
     *   For example, it'll executed when a component is removed and restored, or when the new component is being added.
     *
     */
    export class Component {
        /*
         *   The constructor;
         *   When new a constructor
         */
        constructor(data?: any, option?: ComponentOption);

        /*
         *   The installation. We can process the data that user pass;
         *   When instantiate
         */
        public install?(): void;

        /*
         *   Complete the installation. It'll trigger after HTML being inserted to the page. Please note that it'll trigger when component being removed and restored
         *   Instantiation and existence
         */
        public installed?(): void;

        /*
         *   Uninstall the component. It'll trigger when remove is executed.
         *   When destroy
         */
        public uninstall?(): void;

        /*
         *   Before update.
         *   When existence
         */
        public beforeUpdate?(): void;

        /*
         *   After update.
         *   When existence
         */
        public afterUpdate? (): void;
        public render(): string;
        public style?(): string;
        public beforeRender?(): string;
        public useStore?(store: Store): void;
        public updateSelf?(): void;
        public update?(): void;
        public setData?(data: any, update: boolean): void;
        public removeChild?(indexOrChild: number | Component ): void;
        public remove?(): void;
        public restore?(): void;
    }

    export function $ (selector: string, context: any): HTMLElement;

    export function $$(selector: string, context: any): Array<HTMLElement>;

    export const STYLEPREFIX: string;

    export const STYLESCOPEDPREFIX: string;

    export const  _instanceId: number;

    export interface componentConstructor {
        [name: string]: Component
    }

    export function create (tagName: string, parent: string, setting: any): void

    export function createStore (option: any): Store

    export const customTags: Array<string>;

    /*
     *  Method: Omi.extendPlugin( pluginName, handler )
     *  pluginName is the name of the plugin.
     *  handler is the processor. The handler can get the dom which marked as the pluginName and the instance of the component.
     *  With Omi.extendPlugin, we can give the dom some ability, and can also be associated with the component instance.
     *  The above example is not associated with the instance, let's try it:
     */
    interface ExtendPluginHandler {
        (dom: HTMLElement, instance: Component): void
    }
    export interface plugins{
        [name: string]: ExtendPluginHandler
    }

    export function extendPlugin(pluginName: string, handler: ExtendPluginHandler): void

    export function get(name: string): void

    export function getClassFromString(string: string):  Component

    export function getInstanceId () : number

    export function getParameters(dom: HTMLElement, instance: Component, types: string): void

    export interface instances {
        [component: string]: Component
    }

    /*
     *  We use makeHTML to make the component to a tag which can be used in render method. Of course, Omi.makeHTML('List', List);
     *  can also be written in the end of List component.
     */
    export function makeHTML<T extends Component>(name: string, component: typeof Component): void

    export interface mapping {
        [name: string]: any
    }

    interface MixIndexArrayItem {
        value: any;
        [indexName: string]: number
    }

    export function mixIndex(array: Array<any>, key?: string): Array<MixIndexArrayItem>;

    export function mixIndexToArray(array: Array<any>, indexName: string): void;

    class Store {
        constructor(isReady?: boolean);
        public ready<T>(readyHandle: Array<T>): void;
        public addSelfView?(view: Component): void;
        public addView?(view: Component): void;
        public beReady?(): void;
        public update?(): void;
    }
    /*
     *
     */
    interface IncrementOrOption {
        increment: boolean,
        store: Store,
        autoStoreToData: boolean
    }


    export interface Style{
        scoper(css: string, prefix: string): string;
        addStyle(cssText: string, id: string): void;
    }

    export function render<T extends Component>(component: T, renderTo: string, incrementOrOption?: IncrementOrOption): T

    export type style = Style;
    /*
     *
     */
    export function tag(name: string, ctor:  Component): void

}
/*
 *  export a module omi
 */

declare module "omi" {
    export = Omi;
}