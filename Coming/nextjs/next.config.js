// next.config.js;
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')([
  '@deadline/common',
  '@deadline/components',
]);

// next.js configuration
const nextConfig = {
  webpack5: false,
};

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withTM,
  ],
  nextConfig
);
