import isUnitlessNumber from './is-unitless-number';
import toSlugCase from 'to-slug-case';

export default function toCSS(obj) {
  return Object.keys(obj).map(rawKey => {
    let key = toSlugCase(rawKey);
    if (/^webkit/.test(key) || /^moz/.test(key) || /^ms/.test(key)) {
      key = `-${key}`;
    }

    let value = obj[rawKey];
    if (typeof value === 'number' && !(isUnitlessNumber.hasOwnProperty(key) && isUnitlessNumber[key])) {
      value = `${value}px`;
    }

    return `${key}:${value} !important;`;
  }).join('');
}
