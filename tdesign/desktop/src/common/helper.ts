// 帮助文件

/*
删除相关不需要的api属性
*/
export function delKeyofString(obj: object, fields: string[]): object {
    const shallowCopy = {
        ...obj
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key as keyof typeof shallowCopy]
    }
    return shallowCopy;
}

/**
 * 兼容样式中支持 number/string 类型的传值 得出最后的结果。
 * @param param number 或 string 类型的可用于样式上的值
 * @returns 可使用的样式值。
 */
export function pxCompat(param: string | number) {
    return typeof param === 'number' ? `${param}px` : param;
}
