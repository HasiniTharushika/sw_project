var esbuildDecorators = require('esbuild-plugin-ts-decorators');
var esbuildPluginCopy = require('esbuild-plugin-copy');

module.exports = () => [
  esbuildDecorators.esbuildDecorators(),
  esbuildPluginCopy.copy({
    assets: [
      {
        from: ['./node_modules/swagger-ui-dist/swagger-ui*'],
        to: ['.'],
      },
      {
        from: ['./src/i18n/**/*'],
        to: ['./i18n'],
      },
    ],
  }),
];
