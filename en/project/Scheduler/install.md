::: warning
Machine translation may contain inaccurate content
:::

# Installation

::: warning Note
Currently, we do not provide installation packages for Android and iOS.
:::
There are two ways for you to experience our software:

## Online Experience
We recommend using [Chiziingiin Scheduler](https://production-scheduler.chiziingiin.top) to access our project.

## Compile from Source Code


### Download the Source Code

You can download the source code of this software from our mirror address
[Chiziingiin Scheduler Resources](https://resources.chiziingiin.top/scheduler-master.7z)

Source code GitHub repository
[Github Repository](https://github.com/RainyDreams/scheduler)

### Environment Configuration

Install the latest version of [node.js](https://nodejs.org/)
::: tip Recommended
This software is recommended to be accessed using Google Chrome or Chromium-based browsers.

Click here to install the latest version of [Google Chrome(google.com)](https://www.google.com/chrome/index.html) (For users in China, please visit [Google Chrome(google.cn)](https://www.google.cn/chrome/index.html))
:::

### Start Installation
Open the `software program` folder, and you should see the following directory structure

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

In the `software program` folder, open the terminal and enter the following commands
::: code-group
```sh[npm]
$ npm install
$ npm run dev
```
:::

After successful execution, open http://localhost:8080/ in your browser to use the software.
::: warning Note
This software recommends opening only one tab in the browser, as opening multiple tabs may cause browser database errors and result in a blank screen due to browser policies.
:::