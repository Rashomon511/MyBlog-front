# MyBlog-front

## 为啥写这个??
> 当然是看别人写了个，那我觉得我自己应该也能写一个，那就动手咯！好吧！其实主要是为了学习使用webpack配置和react-saga的使用.

>blog前端由webpack+react+react-router+redux-saga技术栈实现

>后台由express+mongodb实现

>可能还有不少问题，请大佬们轻喷，可以联系我qq:1075843579




## 前端项目结构

```
|-src  					  //开发
|----action  	    //action
|----accest  	    //静态资源
|----components    //ui组件
|----config       //编辑器配置
|----controllers      //容器组件
|----reducer     //reducer
|----saga  	   //saga
|----store            //状态管理
|----stylesheets      //样式
|----utils            // axios——http插件
|----App.js              
|----index.js            //项目启动文件
|-package.json           //项目配置
|-webpack.dev.config.js  //开发环境配置
|-webpack.prod.config.js //生产环境配置
```


## 启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run pro
```

