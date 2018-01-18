var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.js');
var compiler = webpack(config);

console.log(config.output.publicPath)
var server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    contentBase: "./public",  // where index.html is located
    quiet: true,
    historyApiFallback: {index: 'index.html'}
});
server.listen(8090);
