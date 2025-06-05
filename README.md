# Hola for koa

一个简单的命令行工具，用于快速创建基于 **TypeScript** 的 [Koa](https://koajs.com/) 应用模板，内置基础中间件（请求格式化）和开发工具支持。

---

## 🚀 快速开始

### 1. 克隆/下载脚手架


```bash
git clone https://github.com/ASER1989/hola-koa.git
cd hola-koa
npm install
npm link  # 注册为全局命令 hola-koa

```

## 创建新项目

``` sh
hola-koa my-project
cd my-project
npm run dev

```

## 模板功能
- ✅ TypeScript 支持
- ✅ 热重载
- ✅ 内置中间件：
  - API响应格式化 `ResponseFormatter`
- ✅ RESTful 路由结构
- ✅ 完整 tsconfig 配置
- ✅ 完整 rollup 配置
- ✅ 安装完即可运行
