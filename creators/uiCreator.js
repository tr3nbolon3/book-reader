const fs = require('fs');

module.exports = name => {
  const normalName = [name[0].toUpperCase(), name.slice(1)].join('');

  const makeFileBody = templateName =>
    fs.readFileSync(`./creators/templates/${templateName}`, 'utf8').replace(/{name}/gi, normalName);

  const componentPath = `./src/views/UI/${normalName}`;

  const componentBody = makeFileBody('uiTemplate.txt');
  const indexBody = makeFileBody('indexTemplate.txt');

  try {
    fs.mkdirSync(componentPath);

    const filePath = `${componentPath}/${normalName}.js`;
    const indexPath = `${componentPath}/index.js`;

    fs.writeFileSync(filePath, componentBody);
    fs.writeFileSync(indexPath, indexBody);

    console.log(`UI Компонент ${normalName} создан`);
  } catch (err) {
    console.log('Не удалось создать компонент');
    console.error(err);
  }
};
