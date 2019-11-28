export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
export const join = x => y => y.join(x);
export const map = x => y => y.map(x);
export const prependString = x => y => `${x}${y}`;
export const toPairs = obj => {
  const pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
};
