import { config } from '../../config/index';

/** 获取商品评论 */
function mockFetchComments(parmas) {
  const { delay } = require('../_utils/delay');
  const { getGoodsAllComments } = require('../../model/comments');
  return delay().then(() => getGoodsAllComments(parmas));
}

/** 获取商品评论 */
export function fetchComments(parmas) {
  if (config.useMock) {
    return mockFetchComments(parmas);
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
