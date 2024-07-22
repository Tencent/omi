import { resp } from '../after-service-list/api';
import dayjs from 'dayjs';
import { mockIp, mockReqId } from '../../../utils/mock';

export const formatTime = (date, template) => dayjs(date).format(template);

export function getRightsDetail({ rightsNo }) {
  const _resq = {
    data: {},
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 79,
    success: true,
  };
  _resq.data =
    resp.data.dataList.filter((item) => item.rights.rightsNo === rightsNo) ||
    {};
  return Promise.resolve(_resq);
}

export function cancelRights() {
  const _resq = {
    data: {},
    code: 'Success',
    msg: null,
    requestId: mockReqId(),
    clientIp: mockIp(),
    rt: 79,
    success: true,
  };
  return Promise.resolve(_resq);
}
