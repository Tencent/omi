/// <reference types="vite/client" />
// 在 vite-env.d.ts 文件中
declare module '*.css?raw' {
    const content: string;
    export default content;
}