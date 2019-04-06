export function parse(a) {
  const data = {};
  const order = []
  for (let i in a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g)) {
    const c = a[i].match(/[\w\.\-]+/g);
    const key = c.shift()
    order.push(key)
    data[key] = c;
  }
  return {
    order: order,
    data: data
  };
}