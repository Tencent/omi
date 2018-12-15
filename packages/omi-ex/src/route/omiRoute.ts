import oRoute from 'omi-router'
import {IRouteEvt} from './IRouteEvt'

export interface IOmiRoute {
  before: ((evt: IRouteEvt) => void) | (() => void)
  after: ((evt: IRouteEvt) => void) | (() => void)

  /**
   *
   * @param path
   * @param data
   */
  to(path: string, data?: any): void

  /**
   *
   * @param path
   * @param callback
   */
  (path: string, callback: ((evt: IRouteEvt) => void) | (() => void)): void
}

export const omiRoute: IOmiRoute = oRoute
