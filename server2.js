var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log(config.output.publicPath)
new WebpackDevServer(webpack(config), {
    stats: { colors: true },
    proxy: {
        "*": "http://localhost:7479" // <- backend
    },
    publicPath: config.output.publicPath,
    quiet: true, // let WebpackDashboard do its thing
  hot: true,
  historyApiFallback: true
}).listen(3032, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:3032');
  });
