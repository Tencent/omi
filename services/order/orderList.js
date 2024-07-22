import { config } from '../../config/index';

/** 获取订单列表mock数据 */
function mockFetchOrders(params) {
  const { delay } = require('../_utils/delay');
  const { genOrders } = require('../../model/order/orderList');

  return delay(200).then(() => genOrders(params));
}

/** 获取订单列表数据 */
export function fetchOrders(params) {
  if (config.useMock) {
    return mockFetchOrders(params);
  }

  return new Promise((resolve) => {
    resolve('real api');
  });
}

/** 获取订单列表mock数据 */
function mockFetchOrdersCount(params) {
  const { delay } = require('../_utils/delay');
  const { genOrdersCount } = require('../../model/order/orderList');

  return delay().then(() => genOrdersCount(params));
}

/** 获取订单列表统计 */
export function fetchOrdersCount(params) {
  if (config.useMock) {
    return mockFetchOrdersCount(params);
  }

  return new Promise((resolve) => {
    resolve('real api');
  });
}
