function escapeStr(str) {
  return str
      .replace(/\"/g, '\\"')
      .replace(/\n/g, '\\n');
}

var render = function(data) {
  var data = data.data;

  var doc = [
    '## ' + data.title,
    '',
    data.description,
    '',
    '```json',
    '"scripts": {',
    '  "' + data.key + '": "' + escapeStr(data.script) + '"',
    '}',
    '```',
    '\n',
  ];

  if (data.dependencies && data.dependencies.length > 0) {

    doc = doc.concat([
    'Install the dependencies `npm i ' + data.dependencies.join(' ') + ' --save-dev`',
    '\n'
    ]);
  }

  return doc.join('\n');
};

module.exports = render;
