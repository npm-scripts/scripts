var render = function(data) {
  var data = data.data;

  return [
    '## ' + data.title,
    '',
    data.description,
    '',
    '```js',
    '"scripts": {',
    '  "' + data.key + ': "' + data.script + '"',
    '}',
    '```',
    '\n'
  ].join('\n');
};

module.exports = render;
