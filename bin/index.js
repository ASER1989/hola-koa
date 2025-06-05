#!/usr/bin/env node

const path = require('path');
const fs = require('fs-extra');
const { execSync } = require('child_process');

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ 请输入项目名称：');
  console.error('    npx create-koa-app-ts my-project');
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);
const templateDir = path.resolve(__dirname, '../template');

console.log(`📦 创建项目: ${projectName}`);
fs.copySync(templateDir, targetDir);

// 修改 package.json 中的 name 字段
const pkgPath = path.join(targetDir, 'package.json');
const pkg = fs.readJsonSync(pkgPath);
pkg.name = projectName;
fs.writeJsonSync(pkgPath, pkg, { spaces: 2 });

console.log('📦 安装依赖...');
execSync('npm install', { cwd: targetDir, stdio: 'inherit' });

console.log('✅ 项目创建成功！');
console.log(`👉 cd ${projectName}`);
console.log(`👉 npm run dev`);
