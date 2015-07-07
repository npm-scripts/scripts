var scripts = require('./scripts.json');

var render = function(data) {
  var data = data.data;

  var out = '* [' + data.title + '](https://github.com/npm-scripts/scripts#' + data.title + ')\n';

  if (scripts[scripts.length -1].title === data.title) out = out + '\n';
  return out;
};

module.exports = render;
