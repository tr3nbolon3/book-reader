const getBookAuthorNames = authors => authors.map(({ name }) => name).join(', ');

export default getBookAuthorNames;
