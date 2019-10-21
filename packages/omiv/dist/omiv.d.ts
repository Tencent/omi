export = omiv;
export as namespace omiv;

declare namespace omiv {
  function $(options: any): void;

  function render(app: any, renderTo: string, store: any, options: any): void;

  function reset(store: any): void;
}
