# webpack-react-vue-spa-awesome-config

webpack-react-vue-spa-awesome-config

# 自学 webpack4.x,尝试写一个 同时支持 react 和 vue 的单页面应用 通用的 webpack 配置文件,提供开箱即用支持

只使用 webpack.config.js 和 package.json 即可!

借鉴了 [Create-react-app](https://github.com/facebook/create-react-app)

## 使用的 loader

css-loader / babel-loader /worker-loader/vue-loader/url-loader/style-loader/css-loader/sass-loader/file-loader

### 修复了使用 webpack.HotModuleReplacementPlugin 和 worker-loader 不兼容的 bug

该错误来自 Web 工作者，因为 Web worker window 上不可用。

webpack.config.js

```javascript
module.exports = {
  output: {
    globalObject: `( (typeof window !== "undefined" ? window : false) ||
    (typeof WorkerGlobalScope !== "undefined" ? WorkerGlobalScope : false) ||
    this)`
  }
};
```

## 使用的 plugin

WorkboxWebpackPlugin.GenerateSW/MiniCssExtractPlugin/VueLoaderPlugin/HtmlWebpackPlugin/TerserPlugin/OptimizeCSSAssetsPlugin/webpack.HotModuleReplacementPlugin/WebpackDeepScopeAnalysisPlugin

# 使用方法

## yarn install

## yarn start

## yarn build

# 入口文件是"src/index.html"和'src/index.js'
