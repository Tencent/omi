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