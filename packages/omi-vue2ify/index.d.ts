import type { ComponentOptions } from 'vue';
interface OmiVue2ifyOptions {
    methodNames?: string[];
}
/**
 * 将 Omi Web Component 转换为 Vue 2 组件
 * @param tagName - Web Component 标签名
 * @param options - 配置选项
 * @returns Vue 2 组件配置对象
 */
export declare function omiVue2ify(tagName: string, options?: OmiVue2ifyOptions): ComponentOptions<any>;
export {};
