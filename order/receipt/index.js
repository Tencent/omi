/* eslint-disable no-nested-ternary */
import Dialog from 'tdesign-miniprogram/dialog/index';
import Toast from 'tdesign-miniprogram/toast/index';
import { dispatchSupplementInvoice } from '../../../services/order/orderConfirm';

const invoiceJson = {
  info: [
    '1.根据当地税务局的要求，开具有效的企业发票需填写税务局登记证号。开具个人发票不需要填写纳税人识别码。 ',
    '2.电子普通发票： 电子普通发票是税局认可的有效首付款凭证，其法律效力、基本用途及使用规定同纸质发票，如需纸质发票可自行下载打印。 ',
    '3.增值税专用发票： 增值税发票暂时不可开，可查看《开局增值税发票》或致电400-633-6868。',
  ],
  codeTitle: [
    '1.什么是纳税人识别号/统一社会信用代码？ 纳税人识别号，一律由15位、17位、18或者20位码（字符型）组成，其中：企业、事业单位等组织机构纳税人，以国家质量监督检验检疫总局编制的9位码（其中区分主码位与校检位之间的“—”符省略不打印）并在其“纳税人识别号”。国家税务总局下达的纳税人代码为15位，其中：1—2位为省、市代码，3—6位为地区代码，7—8位为经济性质代码，9—10位行业代码，11—15位为各地区自设的顺序码。',
    '2.入户获取/知晓纳税人识别号/统一社会信用代码？ 纳税人识别号是税务登记证上的号码，通常简称为“税号”，每个企业的纳税人识别号都是唯一的。这个属于每个人自己且终身不变的数字代码很可能成为我们的第二张“身份证”。  ',
  ],
};

Page({
  orderNo: '',
  data: {
    receiptIndex: 0,
    addressTagsIndex: 0,
    goodsClassesIndex: 0,
    dialogShow: false,
    codeShow: false,
    receipts: [
      { title: '不开发票', id: 0, name: 'receipt' },
      { title: '电子发票', id: 1, name: 'receipt' },
    ],
    addressTags: [
      { title: '个人', id: 0, name: 'addressTags', type: 1 },
      { title: '公司', id: 1, name: 'addressTags', type: 2 },
    ],
    goodsClasses: [
      { title: '商品明细', id: 0, name: 'goodsClasses' },
      { title: '商品类别', id: 1, name: 'goodsClasses' },
    ],
    name: '',
    componentName: '',
    code: '',
    phone: '',
    email: '',
    invoiceInfo: invoiceJson,
  },
  onLoad(query) {
    const { orderNo, invoiceData } = query;
    const tempData = JSON.parse(invoiceData || '{}');
    const invoice = {
      receiptIndex: tempData.invoiceType === 5 ? 1 : 0,
      name: tempData.buyerName || '',
      email: tempData.email || '',
      phone: tempData.buyerPhone || '',
      addressTagsIndex: tempData.titleType === 2 ? 1 : 0,
      goodsClassesIndex: tempData.contentType === 2 ? 1 : 0,
      code: tempData.buyerTaxNo || '',
      componentName: tempData.titleType === 2 ? tempData.buyerName : '',
    };
    this.orderNo = orderNo;
    this.setData({ ...invoice });
  },
  onLabels(e) {
    const { item } = e.currentTarget.dataset;
    const nameIndex = `${item.name}Index`;
    this.setData({ [nameIndex]: item.id });
  },
  onInput(e) {
    const { addressTagsIndex } = this.data;
    const { item } = e.currentTarget.dataset;
    const { value } = e.detail;
    const key =
      item === 'name'
        ? addressTagsIndex === 0
          ? 'name'
          : 'componentName'
        : item === 'code'
        ? addressTagsIndex === 0
          ? 'phone'
          : 'code'
        : 'email';
    this.setData({ [key]: value });
  },
  onSure() {
    const result = this.checkSure();
    if (!result) {
      Dialog.alert({
        title: '请填写发票信息',
        content: '',
        confirmBtn: '确认',
      });
      return;
    }
    const {
      receiptIndex,
      addressTagsIndex,
      receipts,
      addressTags,
      name,
      componentName,
      code,
      phone,
      email,
      goodsClassesIndex,
    } = this.data;

    const data = {
      buyerName: addressTagsIndex === 0 ? name : componentName,
      buyerTaxNo: code,
      buyerPhone: phone,
      email,
      titleType: addressTags[addressTagsIndex].type,
      contentType: goodsClassesIndex === 0 ? 1 : 2,
      invoiceType: receiptIndex === 1 ? 5 : 0,
    };
    if (this.orderNo) {
      if (this.submitting) return;
      const params = {
        parameter: {
          orderNo: this.orderNo,
          invoiceVO: data,
        },
      };
      this.submitting = true;
      dispatchSupplementInvoice(params)
        .then(() => {
          Toast({
            context: this,
            selector: '#t-toast',
            message: '保存成功',
            duration: 2000,
            icon: '',
          });
          setTimeout(() => {
            this.submitting = false;
            wx.navigateBack({ delta: 1 });
          }, 1000);
        })
        .catch((err) => {
          this.submitting = false;
          console.error(err);
        });
    } else {
      Object.assign(data, {
        receipts: receipts[receiptIndex],
        addressTags: addressTags[addressTagsIndex],
      });
      wx.setStorageSync('invoiceData', data);
      wx.navigateBack({ delta: 1 });
    }
  },
  checkSure() {
    const {
      name,
      componentName,
      code,
      phone,
      email,
      addressTagsIndex,
      receiptIndex,
    } = this.data;
    if (receiptIndex === 0) {
      return true;
    }
    if (addressTagsIndex === 0) {
      if (!name.length || !phone.length) {
        return false;
      }
    } else if (addressTagsIndex === 1) {
      if (!componentName.length || !code.length) {
        return false;
      }
    }
    if (!email.length) {
      return false;
    }
    return true;
  },
  onDialogTap() {
    const { dialogShow } = this.data;
    this.setData({
      dialogShow: !dialogShow,
      codeShow: false,
    });
  },
  onKnoeCode() {
    this.setData({
      dialogShow: !this.data.dialogShow,
      codeShow: true,
    });
  },
});
