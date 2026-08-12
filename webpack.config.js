import path from "node:path";

import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  module: {
  rules: [{
    test: /\.css$/i,
    use: ["style-loader","css-loader"],
  },

{
  test: /\.html$/i,
  use: ["html-loader"],
},
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}



],
},

  plugins: [
  new HtmlWebpackPlugin({
    template: "./src/template.html",
  }),
],

devServer: {
  watchFiles: ["./src/template.html"],
}


};