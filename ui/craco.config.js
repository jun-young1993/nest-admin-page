// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      "@features": path.resolve(__dirname, 'src/features')
    }
  }
};
