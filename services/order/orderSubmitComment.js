import { config } from '../../config/index';

/** 获取评价商品 */
function mockGetGoods(parameter) {
  const { delay } = require('../_utils/delay');
  const { getGoods } = require('../../model/submitComment');
  const data = getGoods(parameter);

  return delay().then(() => {
    return data;
  });
}

/** 获取评价商品 */
export function getGoods(parameter) {
  if (config.useMock) {
    return mockGetGoods(parameter);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
