const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const {alias, configPaths} = require('react-app-rewire-alias')

module.exports = (config) => {

  // remove the module scope plugin
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

  // add alias for the paths
  alias(configPaths('tsconfig.paths.json'))(config);

  return config
};
