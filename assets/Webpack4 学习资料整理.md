1. configuration.module.rules[0].exclude: The provided value "node_modules" is not an absolute path!
---

    exclude的值为正则表达式，不是字符串.

```json
module: 
{
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
}
    
```


2. (node:13784) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(node:13784) DeprecationWarning: Tapable.apply is deprecated. Call apply on the plugin directly instead
C:\Users\Lenovo\Documents\practice\webpack\wp-20180724-test\node_modules\html-webpack-plugin\lib\compiler.js:81
        var outputName = compilation.mainTemplate.applyPluginsWaterfall('asset-path', outputOptions.filename, {
TypeError: compilation.mainTemplate.applyPluginsWaterfall is not a function
---

    You should update your html-webpack-plugin to the latest version:
    npm install --save-dev html-webpack-plugin@3


3. 执行webpack config webapck.config.js报错      HtmlWebPackPlugin is not defined
---
    大小写打错了






參考教程：https://blog.csdn.net/u010238381/article/details/79964790