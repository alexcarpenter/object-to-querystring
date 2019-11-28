const objectToQuerystring = require('..');

test('converts query string into an object', () => {
  const obj = {
    'page': '2',
    'size': '10',
    'total': '200',
  };

  expect(objectToQuerystring(obj)).toStrictEqual('?page=2&size=10&total=200');
});
