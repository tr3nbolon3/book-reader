const fs = require('fs');

module.exports = name => {
  const upperFirstName = [name[0].toUpperCase(), name.slice(1)].join('');

  const makeFileBody = templateName =>
    fs
      .readFileSync(`./creators/templates/duck/${templateName}`, 'utf8')
      .replace(/{name}/gi, name)
      .replace(/{upperFirstName}/gi, upperFirstName);

  const duckPath = `./src/store/ducks/${name}`;

  const typesBody = makeFileBody('types.txt');
  const actionsBody = makeFileBody('actions.txt');
  const reducerBody = makeFileBody('reducer.txt');
  const selectorsBody = makeFileBody('selectors.txt');

  try {
    fs.mkdirSync(duckPath);

    const typesPath = `${duckPath}/${name}Types.js`;
    const actionsPath = `${duckPath}/${name}Actions.js`;
    const reducerPath = `${duckPath}/${name}Reducer.js`;
    const selectorsPath = `${duckPath}/${name}Selectors.js`;

    fs.writeFileSync(typesPath, typesBody);
    fs.writeFileSync(actionsPath, actionsBody);
    fs.writeFileSync(reducerPath, reducerBody);
    fs.writeFileSync(selectorsPath, selectorsBody);

    const importString = `import ${name} from './ducks/${name}/${name}Reducer';`;
    const rootReducerFileContent = fs.readFileSync('./src/store/reducers.js', 'utf8').slice(0, -5);
    const rootReducerHeaderEndIndex = rootReducerFileContent.lastIndexOf(';');
    const rootReducerHeader = rootReducerFileContent.substring(0, rootReducerHeaderEndIndex + 1);
    const rootReducerFooter = rootReducerFileContent.substring(rootReducerHeaderEndIndex + 1);

    const newHeader = `${rootReducerHeader}\n${importString}`;
    const newFooter = `${rootReducerFooter}\n  ${name},\n});\n`;
    const newRootReducerFileContent = `${newHeader}${newFooter}`;

    fs.writeFileSync('./src/store/reducers.js', newRootReducerFileContent);
    // console.log(`Duck ${name} создан`);
  } catch (err) {
    console.log('Не удалось создать duck');
    console.error(err);
  }
};
