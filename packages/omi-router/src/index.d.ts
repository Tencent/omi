/*!
 *  omi-router v3.0.5 by dntzhang
 *  Router for Omi.
 *  Github: https://github.com/Tencent/omi
 *  MIT Licensed.
 */
export declare function hashChange(evt: HashChangeEvent): void;
export declare function route(path: string, callback: (evt: {
  params?: Record<string, string>,
  query?: Record<string, string>,
  data?: any,
  byNative: boolean
}) => void): void;

export declare namespace route {
  var to: (path: string, data?: any) => void;
}

declare const router: {
  route: typeof route;
  hashChange: typeof hashChange;
};
export default router;
