# myToDoList

a To-Do-List  using jQuery, nodejs, Express, mongoDB

实现一个flag清单，添加或删除flag

前端使用模版引擎EJS，引用jQuery库，后端使用nodejs，采用express框架，数据储存在mongoDB上

## 界面展示：

前端：
![image](https://github.com/0rainge/myToDoList/blob/master/img/demo.png?raw=true)

后端：
![image](https://github.com/0rainge/myToDoList/blob/master/img/db.png?raw=true)

## 0. 安装：

- express：后端框架
- body-parser：处理表单
- ejs：模版引擎
- mongoose：连接数据库

## 1. 定义入口文件，实现web服务器

导入express变量（导入进来是一个函数）
实例化变量
引入模版引擎
使用静态文件，中间件写法，设置一个文件夹做为根目录
监听3000端口

安装插件nodemon，默认找server.js 

## 2. 定义路由：

1. 新建文件夹controlers，新建文件 myToDoControler

2. 导出函数

3. 定义路由：请求列表时需要的路由，新增项时需要的路由，删除项目时需要的路由

## 3. 如何引用路由？

1. 导出路由
2. 传入参数

controller：请求相关的控制器，请求会到controller里

model：用来处理数据

view：视图相关

## 4. 使用模版引擎view engine ejs构建页面

1. 引入jQuery：在bootCDN找jquery的动态链接
2. 渲染这个页面：在路由中render，进入路由会渲染这个ejs文件
3. 在内存中渲染这个页面：

渲染数据：

1. res.render('myTodo',{flags: data});

2. ejs中通过<% %>插入js代码，forEach 循环插入数据

数据和服务器通信：

1. 点击按钮把数据发送给服务器
2. 服务器得到内容进行处理，
3. 服务器把数据给浏览器，下面的列表会多加一行

### 5. js功能实现：

实现添加项目：

1. 把内容发给服务器
2. 浏览器自动刷新：如何在数组中添加一个项目
3. res.json只是让请求不报错
4. 如何把post数据取出来：用到一个库：body-parser

实现删除项目：

1. 点击之后，得到项的内容，后端就知道删除的是哪一项，设置method为delete，
2. 要注意：空格变成了横线，路由多了参数，路由错误会报错404，正则表达式更改路由：

``` javascript
var item = $(this).text().trim().replace(/ /g, "-");
```

3. filter 取出来的内容是要的，用来过滤一些想要的数据，每一项的内容和传过来的内容进行比较，返回true就是要的

### 6. mongoDB：

存储json文件

注册Mlab
test test666

链接数据库：

1. 安装mongoose并导入
2. 连接数据库
3. 定义schema，定义字段名，值，值的类型item:String，相当于一个数据库表的模版，保证数据格式的正确类型，规定类型的属性，保证程序的健壮性 
4. 定义model，model和数据库中的表是对应关系 ，程序对应操作model同步操作表，新增一条记录
5. 保存数据，同时记得返回报错信息


### 7. 通过数据库进行存取数据：

1. 从mongoDB中读取数据实现渲染

```javascript

Flag.find({},function(err,data){
            if(err) throw err;
            res.render('myTodo',{flags:data});
         });

```

2. 把项目添加到列表中

（把之前写死的数据改成动态数据）

```javascript

var flagOne = Flag(req.body).save(function (err,data) {
             if (err) throw err;
             res.json(data);
             //  console.log('已保存: item saved');
         })
```

保存请求体

3. 删除数据

找到这条记录，删除掉，用正则表达式进行转换

``` javascript
         Flag.find({item: req.params.item.replace(/-/g, " ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
         });
```

## 问题记录：

js中$ 的用法：

JQuery中一个自定义函数名，这个函数是获取指定网页元素的函数

```javascript
function $(Nid){
 return document.getElementById(Nid);
}


- $()可以是$(element)，即一个特定的DOM元素

$(document).find("div>p").html());

- $()可以是$(expresion)

alert($("div>p").html());

- $()可以是$(function)，即一个函数

$(function(){
alert("Hello world!");
});


相当于

$(document).ready(function(){ 
alert("Hello world!"); 
}); 
```

这是为了防止文档在完全加载（就绪）之前运行 jQuery 代码，即在 DOM 加载完成后才可以对 DOM 进行操作。
如果在文档没有完全加载之前就运行函数，操作可能失败。下面是两个具体的例子：

- 试图隐藏一个不存在的元素
- 获得未完全加载的图像的大小
