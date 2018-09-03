

npm安装react和react-dom,react 0.1.x版本后两者分开
```cmd
npm install -S react react-dom
```

安装webpack和webpack-dev-server
```cmd
npm install -D webpack webpack-dev-server
```

新建 app.js 作为入口文件

添加webpack配置文件
```javscript
module.exports = {
    entry: {
        app: "./app.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: './dist'
    }
}
```

命令行直接运行
```cmd
webpack-dev-server --open
```
会提示 "'webpack-dev-server' 不是内部或外部命令，也不是可运行的程序"，需要写在 package.json 里面。
```json
"scripts": {
    "start": "webpack-dev-server --open",
    "build": "webpack"
  }
```

成功运行，webpack-dev-server 寻找的是 dist 目录下的 index.html,但我们此时还没有 index.html。需要使用 HtmlWebpackPlugin,它可以帮我们创建html，并自动把打包后的js插入到html中。

```javascript
plugins: [new HtmlWebpackPlugin()]
```

