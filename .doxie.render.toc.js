var render = function(data) {
  var data = data.data;

  return '* [' + data.title + '](https://github.com/npm-scripts/scripts#' + data.title + ')\n';
};

module.exports = render;
