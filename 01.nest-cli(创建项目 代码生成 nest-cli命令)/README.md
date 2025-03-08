# 学习 nest-cli 项目启动脚手架

## 创建nest项目的两种方式

```js
// 1. 通过npx执行,npm会把它下载下来然后执行
npx @nestjs/cli new [projectname]

// 2.全局安装nest-cli创建
npm i -g @nest/cli
nest new [projectname]

// 升级nest-cli: npm update -g @nestjs/cli
```

## nest提供的命令

```js
// 终端输入: nest -h 可以查看提供的所有命令

nest new: 创建新项目
nest generate: 生成代码
nest build: 编译构建
nest start: 启动项目
```

### nest new（创建项目）

```js
// 终端输入nest new -h 可以查看nest new命令下的细分选项

nest new [projectname] --skip-git // 代表创建项目时不初始化git仓库
nest new [projectname] --skip-install // 代表创建项目时不下载依赖包(即不执行 npm install)
nest new [projectname] --package-manager // 创建项目是自己指定包管理器, 例如 nest new test -p npm
nest new [projectname] --language // 可以指定ts和ts, 默认ts
nest new [projectname] --strict // 是否开启严格模式,四个选项,默认为false
```

### nest generate(代码生成)

```js
// 可以通过nest generate命令来生成 module controller service文件

// 生成Module文件,生成后会自动在AppModule中注册
nest generate module student 
// 生成Controller文件,默认会生成测试文件,生成后会自动在StudentModule中注册
nest generate controller student
// 生成Service文件,默认会生成测试文件,生成后会自动在StudentModule中注册
nest service controller student 

// 如果想直接完整的生成一个新的模块(包括module controller service)可以使用如下命令
nest generate resource teacher 
// 回车后会让你选择代码风格,因为nest支持http、websocket、graphql、tcp等,这里我们选择http的REST风格api,然后会让你选择是否生成CRUD代码,选择y或n
```

```js
// --spec 和 --no-spec表示是否生成测试文件,默认为是
nest generate resource animal --no-spec // 表示不需要生成测试文件
```

### nest build(编译构建)

```js
nest build --tsc // 表示使用tsc进行编译,默认
nest build --webpack // 表示使用webpack进行编译
nest build --path // 是指定tsc配置文件的路径的
nest build --config // 是指定nest-cli的配置文件路径的
nest build --watch // 是监听文件变动,自动build的
```

### nest start(运行项目)

```js
nest start --watch // 表示启动项目后,如果监听到文件发生改动 自动重启
nest start --debug // 是启动调试的websocket服务
nest start --exec // 可以指定用什么来跑,默认是用node跑,也可以切换别的runtime
// 其余选项和nest build一样
```

### nest info(信息查看)

```js
// nest info 可以用来查看项目信息,包括系统信息,node,npm和依赖版本
```

## nest-cli.json

```js
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true, // 表示每次build时都会清空dist目录
    "webpack": true // 表示nest build时使用webpack编译, 设置为false后就默认使用tsc编译
  }
}
```

