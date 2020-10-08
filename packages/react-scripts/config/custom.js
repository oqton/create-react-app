'use strict';

const fs = require('fs');
const paths = require('./paths');

// Check if TypeScript is setup
const useTypeScript =
  process.env.DISABLE_TYPESCRIPT !== 'true' && fs.existsSync(paths.appTsConfig);

const useServiceWorker =
  process.env.DISABLE_SW !== 'true' && fs.existsSync(paths.swSrc);

const useLinter = process.env.DISABLE_ESLINT !== 'true';

module.exports = {
  useTypeScript,
  useServiceWorker,
  useLinter,
};
