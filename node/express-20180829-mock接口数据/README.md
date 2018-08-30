## 使用方法 ##

安装依赖的包
```cmd
npm install
```

全局安装 supervisor,监听app.js变化并自动部署
```cmd
npm install supervisor -g
```

运行项目
```cmd
npm run start
```
或
```cmd
supervisor app.js
```

看到命令行输出 listening on port 3000,即成功.