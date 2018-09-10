手动搭建react和webpack开发环境
======

2018/9/9
------

npm安装react和react-dom,react 0.1.x版本后两者分开
```cmd
npm install -S react react-dom
```

安装webpack和webpack-dev-server
```cmd
npm install -D webpack webpack-dev-server
```

新建 app.js 作为入口文件
```javascript
import React  from "react";
import ReactDom from "react-dom";

const ele = React.createElement('div',null,"Hello React");
ReactDom.render(ele,document.querySelector("#root"));
```

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


src 目录下新建views目录，新建 main.jsx,添加如下代码
```javascript
import React from 'react';

export class main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'john',
            age: 18
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
```

在 app.js 中添加如下代码:
```javascript
import main from './src/views/main';
ReactDom.render(<main />,document.querySelector("#root"));
```

运行 npm run start，发现报错，jsx需要使用babel-loader转换。

```cmd
npm install -D babel-loader @babel/core @babel/preset-env
```

SyntaxError: react02-webpack\app.js: Unexpected token (8:16)

只转换了js，没有转换成功jsx，需要添加 @babel/preset-react

```cmd
npm install -D @babel/preset-react
```

在 webpack.config.js 里面 module.exports 中添加如下配置：

```javascript
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            }
        }
    ]
}
```

运行项目就可以了。

使用 less
------

安装 less 

```cmd

```

报错
Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
> .header {
|   color: red;
| }

