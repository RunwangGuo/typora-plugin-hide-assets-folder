# Hide Assets Folder

一个 Typora 社区插件，用于隐藏侧边栏中文件树里以 `.assets` 结尾的文件夹。

## 插件背景

在 Typora 写 Markdown 时，常见设置是把图片保存到：

- `./${filename}.assets`

这会导致每个文档旁边都出现一个同名 `.assets` 目录，侧边栏会很乱。

## 适用场景

例如你有：

- `项目说明.md`
- `项目说明.assets/`

- `设计方案.md`
- `设计方案.assets/`

插件的目标就是把这些 `*.assets` 目录在侧边栏隐藏掉。

## 前后对比（直观版）

### 使用前（未启用插件）

```text
workspace/
├── 项目说明.md
├── 项目说明.assets/
│   ├── image-1.png
│   └── image-2.png
├── 设计方案.md
└── 设计方案.assets/
    └── cover.png
```

### 使用后（启用插件）

```text
workspace/
├── 项目说明.md
└── 设计方案.md
```

说明：

- 只隐藏侧边栏显示
- 磁盘中的 `项目说明.assets/`、`设计方案.assets/` 依然存在
- 文档中的图片链接不会被删除

## 功能特性

- 隐藏路径以 `.assets` 结尾的文件夹节点
- 作用于 Typora 侧边栏文件树
- 插件加载时自动注入样式，卸载时自动移除
- 轻量实现，无外部依赖

## 隐藏规则

插件使用如下 CSS 选择器：

```css
.file-node-content[data-path$=".assets"],
.file-node-content[data-path$=".assets/"],
.sidebar-content [data-path*=".assets"]
```

例如以下目录会被隐藏：

- `note.assets`
- `images.assets`

## 安装方式

### 方式一：通过插件市场安装

当该插件被收录到 Typora 社区插件市场后，可在 Typora 中：

- `Settings` -> `Plugin Marketplace`

搜索 `Hide Assets Folder` 后安装。

### 方式二：手动安装

1. 打开 Typora 的插件目录。
2. 创建目录：
   - `typora-community-plugin.hide-assets-folder`
3. 将以下文件放入该目录：
   - `manifest.json`
   - `main.js`
4. 重启 Typora。

## 兼容性

- Typora `>= 1.5.0`
- Typora Community Plugin Core `>= 2.0.0-beta.31`
- 支持平台：`win32`、`linux`、`darwin`

## 开发说明

### 文件结构

- `manifest.json`：插件元数据
- `main.js`：插件主逻辑（注入/移除样式）

### 发布流程

1. 修改 `manifest.json` 中的 `version`
2. 提交并推送代码
3. 创建 git tag（例如 `1.0.1`）
4. 打包插件文件：
   - `zip plugin.zip main.js manifest.json`
5. 在 GitHub 创建 Release 并上传 `plugin.zip`

## 仓库地址

- 源码仓库：https://github.com/RunwangGuo/typora-plugin-hide-assets-folder
- 发布页面：https://github.com/RunwangGuo/typora-plugin-hide-assets-folder/releases

## 许可证

MIT，详见 [LICENSE](./LICENSE)。
