Package.describe({
  name: 'numtel:publicsources',
  summary: 'DEPRECATED: Switch to the new numtel:lazy-bundles package for latest release',
  version: '1.0.2',
  git: 'https://github.com/numtel/meteor-publicsources.git'
});

Package.registerBuildPlugin({
  name: 'publicSources',
  use: [ ],
  sources: [
    'plugin/compile-public-sources.js'
  ],
  npmDependencies: {}
});
