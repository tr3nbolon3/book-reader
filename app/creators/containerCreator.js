const fs = require('fs');

module.exports = name => {
  const normalName = [name[0].toUpperCase(), name.slice(1)].join('');
  const containerPath = `./src/views/containers/${normalName}.js`;

  const containerBody = fs
    .readFileSync(`./creators/templates/containerTemplate.txt`, 'utf8')
    .replace(/{name}/gi, normalName);

  try {
    fs.writeFileSync(containerPath, containerBody);
    console.log(`Container комопонент ${normalName} создан`);
  } catch (err) {
    console.log('Не удалось создать контейнер');
    console.log(err);
  }
};
