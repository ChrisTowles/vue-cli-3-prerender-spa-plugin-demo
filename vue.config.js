const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
    publicPath:'/vue-cli-3-prerender-spa-plugin-demo/',
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/about',
          '/contact',
        ],
      }),
    ],
  },
};
