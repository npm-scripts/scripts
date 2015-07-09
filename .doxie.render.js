function escapeStr(str) {
  return str
      .replace(/\"/g, '\\\\"')
      .replace(/\n/g, '\\\\n');
}

var render = function(data) {
  var data = data.data;

  return [
    '## ' + data.title,
    '',
    data.description,
    '',
    '```json',
    '"scripts": {',
    '  "' + data.key + '": "' + escapeStr(data.script) + '"',
    '}',
    '```',
    '\n'
  ].join('\n');
};

module.exports = render;
