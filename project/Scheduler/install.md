# 安装

::: warning 需要注意的是
目前我们并未提供Android和iOS的安装包
:::
您有以下两种方式来体验我们的软件

## 线上体验
推荐使用 [Chiziingiin Scheduler](https://production-scheduler.chiziingiin.top) 来访问我们项目

## 使用源码编译


### 下载源码

您可以从我们提供的镜像地址下载本软件源码
[Chiziingiin Scheduler Resoures](https://resources.chiziingiin.top/scheduler-master.7z)

源码Github仓库
[Github Repository](https://github.com/RainyDreams/scheduler)

### 环境配置

安装最新版 [node.js](https://nodejs.org/)
::: tip 推荐
本软件推荐使用Google Chrome或Chromium内核的浏览器访问

点击此处安装最新版 [Google Chrome(google.com)](https://www.google.com/chrome/index.html) （国内请访问 [Google Chrome(google.cn)](https://www.google.cn/chrome/index.html) ）
:::

### 开始安装
打开 `软件程序` 文件夹，您应看到以下目录结构
```
├─dist
│  └─assets
└─src
    ├─components
    ├─router
    ├─styles
    ├─utils
    └─views
        └─settings
```
在 `软件程序` 文件夹中打开终端，输入以下命令
::: code-group
```sh[npm]
$ npm install
$ npm run dev
```
:::
   
运行成功后用浏览器打开 `http://localhost:8080/` 即可使用软件。
::: warning 注意
本软件推荐浏览器只打开一次本网页，即浏览器只打开一个标签页，因浏览器策略问题，多开可能导致浏览器数据库错误，出现白屏。
:::