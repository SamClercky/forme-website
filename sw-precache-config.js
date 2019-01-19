module.exports = {
    staticFileGlobs: [
      '/*.html',
      '/*',
      '/images/**.*',
      '/static/js/**.js',
      '/static/css/**.css'
    ],
    // stripPrefix: 'app/',
    runtimeCaching: [{
      urlPattern: /https:\/\/unpkg\.com\/.*/,
      handler: 'networkFirst'
    }],
    verbose: true
  };