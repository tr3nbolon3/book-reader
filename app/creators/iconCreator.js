const fs = require('fs');

module.exports = name => {
  const normalName = `${[name[0].toUpperCase(), name.slice(1)].join('')}Icon`;

  const makeFileBody = templateName =>
    fs.readFileSync(`./creators/templates/${templateName}`, 'utf8').replace(/{name}/gi, normalName);

  const componentPath = `./src/views/UI/Icons/${normalName}`;

  const componentBody = makeFileBody('iconTemplate.txt');
  const indexBody = makeFileBody('indexTemplate.txt');

  try {
    fs.mkdirSync(componentPath);

    const filePath = `${componentPath}/${normalName}.js`;
    const indexPath = `${componentPath}/index.js`;

    fs.writeFileSync(filePath, componentBody);
    fs.writeFileSync(indexPath, indexBody);

    console.log(`Icon Компонент ${normalName} создан`);
  } catch (err) {
    console.log('Не удалось создать компонент');
    console.error(err);
  }
};
