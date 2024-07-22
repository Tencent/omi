import { config } from '../../config/index';

/** 获取商品列表 */
function mockFetchGood(ID = 0) {
  const { delay } = require('../_utils/delay');
  const { genGood } = require('../../model/good');
  return delay().then(() => genGood(ID));
}

/** 获取商品列表 */
export function fetchGood(ID = 0) {
  if (config.useMock) {
    return mockFetchGood(ID);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
