import { createBrowserHistory } from 'history';
import qs from 'query-string';

export const noop = () => {};
export const capitalize = str => `${str[0].toUpperCase()}${str.slice(1)}`;
export const stringify = value => value || 'N/A';

const history = createBrowserHistory();

// export const setQueryString = (values, searchObject) => {
//   const prev = qs.parse(history.location.search);

//   const current = {
//     pathname: `/dashboard/find/${searchObject}`,
//     search: qs.stringify({
//       ...prev,
//       ...values,
//     }),
//   };

//   history.push(current);
// };

export const getQueryString = () => history.location.search;

export const shapeFiltersFromQs = () => {
  const filters = qs.parse(getQueryString());

  if (filters.exp && !(filters.exp instanceof Array)) {
    filters.exp = [filters.exp];
  }

  if (filters.loc && !(filters.loc instanceof Array)) {
    filters.loc = [filters.loc];
  }

  if (filters.lang && !(filters.lang instanceof Array)) {
    filters.lang = [filters.lang];
  }

  if (filters.avl && !(filters.avl instanceof Array)) {
    filters.avl = [filters.avl];
  }

  if (filters.place && !(filters.place instanceof Array)) {
    filters.place = [filters.place];
  }

  if (filters.payment && !(filters.payment instanceof Array)) {
    filters.payment = [filters.payment];
  }

  return filters;
};


export const shapeQsFromFilters = filters => Object.keys(filters)
  .reduce((acc, key) => {
    const value = filters[key];

    if (!value || !value.length) {
      return acc;
    }

    return { ...acc, [key]: value };
  }, {});
