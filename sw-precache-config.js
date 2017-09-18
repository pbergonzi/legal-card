module.exports = {
    staticFileGlobs: [
      'dist/**.html',
      'dist/**.js',
      'dist/**.css',
      'dist/assets/insurance/dummy/*',
      'dist/assets/insurance/fonts/*',
      'dist/assets/insurance/images/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
};