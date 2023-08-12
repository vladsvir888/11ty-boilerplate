module.exports = function (config) {
  config.addPassthroughCopy({ 'app/resources/*': 'assets' });
  config.addPassthroughCopy({ 'app/resources/pwa-icons': 'assets/pwa-icons' });
};
