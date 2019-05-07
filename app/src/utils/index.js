// import { createBrowserHistory } from 'history';
// import qs from 'query-string';

export const noop = () => {};
export const upperFirst = str => `${str[0].toUpperCase()}${str.slice(1)}`;

export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}

