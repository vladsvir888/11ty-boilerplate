module.exports = function (config) {
  config.addPassthroughCopy({ 'app/_resources/*': 'assets' });
};
