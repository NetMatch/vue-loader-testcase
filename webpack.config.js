const path = require( "path" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const VueLoaderPlugin = require( "vue-loader/lib/plugin" );

module.exports = ( env ) => {
	return {
		mode    : "development",
		devtool : "source-map",
		entry   : {
			"app" : path.resolve( "./src/app.js" )
		},
		output : {
			path     : path.resolve( "./dist" ),
			filename : "js/[name].js"
		},
		plugins : [
			new MiniCssExtractPlugin({
				filename : "style/[name].css"
			}),
			new VueLoaderPlugin()
		],
		module : {
			rules : [{
				test : /\.vue$/i,
				use  : [{
					loader  : "vue-loader",
					options : { 
						appendExtension : true,
						sourceMap       : true
					}
				}]
			}, {
				test : /\.css$/i,
				use  : [{
					loader  : MiniCssExtractPlugin.loader,
					options : {}
				}, {
					loader  : "css-loader",
					options : { sourceMap: true }
				}]
			}]
		}
	}
};
