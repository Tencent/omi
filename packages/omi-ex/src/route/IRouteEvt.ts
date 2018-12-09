export interface IRouteEvt {
  query: {
    [k: string]: string
  },
  params: {
    [k: string]: string
  },
  data: any,
  byNative: boolean
}