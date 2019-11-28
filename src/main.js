import { compose, join, map, prependString, toPairs } from './utils';

const prependQuestionMark = prependString('?');
const joinWithAmpersand = join('&');
const joinWithEquals = map(join('='));

const objectToQuerystring = compose(
  prependQuestionMark,
  joinWithAmpersand,
  joinWithEquals,
  toPairs,
);

export default objectToQuerystring;
