import Dialog from 'tdesign-miniprogram/dialog/index';
import Toast from 'tdesign-miniprogram/toast/index';
import reasonSheet from '../components/reason-sheet/reasonSheet';
import { getDeliverCompanyList, create, update } from './api';

Page({
  deliveryCompanyList: [],

  data: {
    trackingNo: '',
    remark: '',
    deliveryCompany: null,
    submitActived: false,
    submitting: false,
  },
  onLoad(query) {
    const {
      rightsNo = '',
      logisticsNo = '',
      logisticsCompanyName = '',
      logisticsCompanyCode = '',
      remark = '',
    } = query;

    if (!rightsNo) {
      Dialog.confirm({
        title: '请选择售后单？',
        content: '',
        confirmBtn: '确认',
      }).then(() => {
        wx.navigateBack({ backRefresh: true });
      });
    }
    this.rightsNo = rightsNo;
    if (logisticsNo) {
      wx.setNavigationBarTitle({
        title: '修改运单号',
        fail() {},
      });
      this.isChange = true;
      this.setData({
        deliveryCompany: {
          name: logisticsCompanyName,
          code: logisticsCompanyCode,
        },
        trackingNo: logisticsNo,
        remark,
        submitActived: true,
      });
    }
    this.setWatcher('trackingNo', this.checkParams.bind(this));
    this.setWatcher('deliveryCompany', this.checkParams.bind(this));
  },

  setWatcher(key, callback) {
    let lastData = this.data;
    const keys = key.split('.');
    keys.slice(0, -1).forEach((k) => {
      lastData = lastData[k];
    });
    const lastKey = keys[keys.length - 1];
    this.observe(lastData, lastKey, callback);
  },

  observe(data, k, callback) {
    let val = data[k];
    Object.defineProperty(data, k, {
      configurable: true,
      enumerable: true,
      set: (value) => {
        val = value;
        callback();
      },
      get: () => {
        return val;
      },
    });
  },

  getDeliveryCompanyList() {
    if (this.deliveryCompanyList.length > 0) {
      return Promise.resolve(this.deliveryCompanyList);
    }
    return getDeliverCompanyList().then((res) => {
      this.deliveryCompanyList = res.data || [];
      return this.deliveryCompanyList;
    });
  },

  onInput(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({ [key]: value });
  },

  onCompanyTap() {
    this.getDeliveryCompanyList().then((deliveryCompanyList) => {
      reasonSheet({
        show: true,
        title: '选择物流公司',
        options: deliveryCompanyList.map((company) => ({
          title: company.name,
          checked: this.data.deliveryCompany
            ? company.code === this.data.deliveryCompany.code
            : false,
        })),
        showConfirmButton: true,
        showCancelButton: true,
        emptyTip: '请选择物流公司',
      }).then((indexes) => {
        this.setData({
          deliveryCompany: deliveryCompanyList[indexes[0]],
        });
      });
    });
  },

  checkParams() {
    const res = { errMsg: '', require: false };

    if (!this.data.trackingNo) {
      res.errMsg = '请填写运单号';
      res.require = true;
    } else if (!this.data.deliveryCompany) {
      res.errMsg = '请选择物流公司';
      res.require = true;
    }
    this.setData({ submitActived: !res.require });
    return res;
  },

  onSubmit() {
    const checkRes = this.checkParams();
    if (checkRes.errMsg) {
      Toast({
        context: this,
        selector: '#t-toast',
        message: checkRes.errMsg,
        icon: '',
      });
      return;
    }

    const {
      trackingNo,
      remark,
      deliveryCompany: { code, name },
    } = this.data;

    const params = {
      rightsNo: this.rightsNo,
      logisticsCompanyCode: code,
      logisticsCompanyName: name,
      logisticsNo: trackingNo,
      remark,
    };
    const api = this.isChange ? create : update;
    this.setData({ submitting: true });
    api(params)
      .then(() => {
        this.setData({ submitting: false });
        Toast({
          context: this,
          selector: '#t-toast',
          message: '保存成功',
          icon: '',
        });
        setTimeout(() => wx.navigateBack({ backRefresh: true }), 1000);
      })
      .catch(() => {
        this.setData({ submitting: false });
      });
  },

  onScanTap() {
    wx.scanCode({
      scanType: ['barCode'],
      success: (res) => {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '扫码成功',
          icon: '',
        });
        this.setData({ trackingNo: res.result });
      },
      fail: () => {},
    });
  },
});
