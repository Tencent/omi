function getInstance(context, selector = '#wr-reason-sheet') {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page;
  }
  const instance = context && context.selectComponent(selector);
  if (!instance) {
    console.warn(`未找到reason-sheet组件,请检查selector是否正确`);
    return null;
  }
  return instance;
}

export default function (options) {
  const { context, selector, ..._options } = options;
  return new Promise((resolve, reject) => {
    const instance = getInstance(context, selector);
    if (instance) {
      instance.setData(Object.assign({}, _options));
      instance._onCancel = () => reject();
      instance._onConfirm = (indexes) => resolve(indexes);
    }
  });
}
