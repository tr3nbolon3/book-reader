// import { createBrowserHistory } from 'history';
// import qs from 'query-string';

export const noop = () => {};
export const upperFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

export const cleanObject = object =>
  Object.keys(object)
    .filter(key => !!object[key])
    .reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});
