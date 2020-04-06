
## Mock学习笔记
#### 简介

> Mock其实就是根据一定的规则生成json数据，日常使用经常是搭配一个服务器来使用的。使用使用mock生成数据再将数据经过服务器返回给客户端。
比如node服务器， 下面是采用 express 来搭建的一个服务器，返回 mock数据

#### 准备工作

首先我们需要 安装 `mock` 和 `express`
- 初始化项目
  ```
  需要在当前的根目录下创建一个 package.json 文件
  可以直接执行以下命令来创建：
  npm init -y   
  
  使用命令后首先会提示创建的一些细节，可以直接一直回车跳过。
  ```
 - 安装所需的插件
    ```
    npm install express mockjs 或者 yarn add express mockjs 
    ``` 
#### 创建 mock 文件，用于生成mock数据
  ```javascript
    //引入mock
    const {mock} = require('mockjs');
    // 
    exports.getItems = function () {
    /**
    * 创建 一个对象， 里面包含 user字段，它的值是一个对象数组
    输出如下： {
        user: [
        {
          name:"张三", age: 2   
        },
         {
          name:"张三张三", age: 10  
        }
        ....
        ]
    }
    * 数组的长度为 1-10之间随机, 1-10，在不同类型的情况下表达的意思是不相同的，
    a. 当值为Array类型的时候，代表的是数组的长度， 1-10之间也就是min-max之间的区域
    b. 当值为String类型的时候,代表值的重复次数，可以看到上面输出的 name:'张三张三' 就是重复了两次
    c. 当值为Number类型的时候就代表这值的大小在 1-10（min-max）的区域范围
    */
    return mock({
        'user|1-10': [{
            'name|1-10': '张三',
            'age|1-10': 10
        }]
    })
    }
    /**
    * 这个例子返回的数据返回的结果：
     age被固定在20-100之间
    *
     {
         age: 21
     }
    */
    exports.getAge = function () {
    return mock({
        'age|20-100': 100, // 返回 20-100 之间的年龄
    })
    }
    /**
    *这个例子 随机返回 男 和 女， 概率 男 为 1/2，
    别看它的值是一个数组，还需要注意字段后面的类型->>> 'sex|1'， 其中1代表的是返回的值为 1个 ，且返回的概率是 1/值，在下面只有男和女两个值，所以概率是1/2
    */
    exports.getSex = function () {
    // 返回的是一个数组
    return mock({
        'sex|1': ['男','女'], // 返回值在男 和 女之间随机
      })
    }
  ```
  更详细的mock配置请移步到官方文档：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
#### 接下来创建api接口，用于请求
  ```
  const {getItems, getAge,getSex} = require('../mock/mock');

  exports.initApi = function (router) {
    router.get('/getItems', (req, res) => {
        res.json(getItems());
    })
    router.get('/getAge', (req, res) =>     {
        res.json(getAge());
    })
    router.get('/getSex', (req, res) => {
        res.json(getSex());
    })
   
  }
  
  ```

#### 创建一个express 服务器
```
     
  2. 创建 server.js 用于创建并启动服务
    
    // 引入 express 
     const express = require('express')
     const router = express.Router();
     //创建服务实例
     const app = express();
     // api接口
     const {initApi} = require('./api');
     app.use(express.static(__dirname));
     initApi(router);
     app.use(router);
     const port = 4010; // 设置当前服务器的端口号
     //启动服务
     app.listen(port, () => {
     console.log(`Server listening on http://localhost:${port} Ctrl+C to stop`)
     })
     
  ```
  #### 启动服务
  
  ```
   在控制台执行： node ./server.js
  ```
  启动之后
  
  就可以直接访问：http://localhost:4010
  
  直接访问上面定义好的接口
  
  ：http://localhost:4010/getItems
  ：http://localhost:4010/getSex
  ：http://localhost:4010/getAge
  
  
