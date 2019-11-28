# object-to-querystring

> Convert a object into a query string

## Installation

```bash
$ npm i @alexcarpenter/object-to-querystring
```

## Usage

```js
import objectToQuerystring from '@alexcarpenter/object-to-querystring';

const obj = {
  page: '2',
  size: '10',
  total: '200',
};
objectToQuerystring(ojb); //=> ?page=2&size=10&total=200
```

## Related

- [querystring-to-object](https://github.com/alexcarpenter/querystring-to-object)

## License

[MIT](LICENSE).
