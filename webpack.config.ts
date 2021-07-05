import path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  mode: "production",
  entry: ["react-hot-loader/patch", "./src/index.ts"],
  target: "node",
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "index.js",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".ts"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  //   devtool: "inline-source-map",
  devServer: {
    index: "index.html",
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
  },
};

export default config;
