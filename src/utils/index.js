// import { createBrowserHistory } from 'history';
// import qs from 'query-string';

export const noop = () => {};
export const upperFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export const cutText = (text, maxLen = 38) => (text.length > maxLen ? `${text.substring(0, maxLen - 3)}...` : text);

export const getBookAuthorNames = authors => authors.map(({ name }) => name).join(', ');

export const cleanObject = object =>
  Object.keys(object)
    .filter(key => !!object[key])
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});
