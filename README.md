# web自动化构建 工程化 模块化 （Mac） 

一.web环境安装配置

1.安装node.js ，npm      //终端运行检查是否安装成功  node -v  npm -v

2.创建根目录文件夹<web>   cd 文件夹<web>路径

3.npm init 初始化 生成package.json文件





二.webpack 脚手架 依赖 安装配置

1.npm i －D webpack webpack-cli webpack-dev-server babel@7 babel-core babel-preset-env babel-plugin-transform-runtime babel-plugin-transform-decorators babel-plugin-transform-decorators-legacy sass-loader node-loader css-loader style-loader ejs-loader tml-webpack-plugin --registry = https://registry.npm.taobap.org

2.在web根目录下创建webpack.config.js 文件进行配置

3.创建配置出入口对应的html，js等文件

4.在package.json文件中配置打包服务运行

5.npm run dev 运行




三.gulp 脚手架 依赖 安装配置

1.npm i -D gulp gulp-cli gulp-message gulp-less gulp-imagesmin gulp-uglify gulp-concat gulp-sequence gulp-livereload

2.在web根目录下创建gulpfile文件进行配置  导出 exports.default
	gulp 常用方法：

	1）series() 按顺序执行任务, parallel()并行执行任务

	2）src()  找到需要执行任务的文件

	3）dest() 执行任务的文件的去处

	4）watch() 监听文件是否发生变化  

3.运行 gulp

	注:gulp 命令不存在时 运行以下命令:

	 1)npm root -g  //更改目录为 usr/local  

	 2) sudo npm install gulp -g    //全局安装

 




四.git study

0.在官网https://git-scm.com/ 下载git进行安装    git --version  //检查是否安装成功

1.在Github上注册账号 创建仓库 new repository

2.在web文件夹中创建需要提交到Github的文件／文件夹

3.git init  //初始化本地仓库

4.git add <file>   //提交文件     git rm -r --cached <file>   //删除文件

5.git status   //查看状态

6.git commit -m '备注信息'   //提交本地仓库并备注

7.git branch <filename>   //创建分支

8.git checkout <filename>   //切换到分支

9.git checkout master   //切换到主线

10.git merge <filename>   //分支合并到主线上

11.git remote   //检查是否与远程仓库连接

12.git remote remove origin  //关闭与远程仓库连接

13.git remote add origin github仓库地址  //连接远程仓库

14.git pull --rebase origin master    //本地仓库更新远程仓库的最新内容

15.git push －u origin master  //提交到远程仓库

注：创建.gitigonre文件 把忽略的文件名或文件夹路径写在.gitignore文件里面


















