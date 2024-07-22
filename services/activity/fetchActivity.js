import { config } from '../../config/index';

/** 获取活动列表 */
function mockFetchActivity(ID = 0) {
  const { delay } = require('../_utils/delay');
  const { getActivity } = require('../../model/activity');

  return delay().then(() => getActivity(ID));
}

/** 获取活动列表 */
export function fetchActivity(ID = 0) {
  if (config.useMock) {
    return mockFetchActivity(ID);
  }

  return new Promise((resolve) => {
    resolve('real api');
  });
}
