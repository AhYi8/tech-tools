# 1. Tech-Tools

- 一款极具炫酷科技风格的工具集合网站
- 完全静态页面设计，无任何第三方框架
- 解耦配置与页面，方便维护，动态增加工具页面
- 所有工具均为一个完整的 `html` 页面，无任何其他依赖，可以单独启动

# 2. 新增工具

1. 所有工具都存放在 `tools` 目录下，每个工具为一个独立的html文件
2. 新增工具时，请参考 `tools` 目录下的其他工具的样式和设计风格
3. 请及时更新 `tools-config.js` 文件，增加新工具的配置

# 3. 自部署

推荐使用 [Vercel](https://vercel.com) 部署，具体部署步骤如下：

1. Fork 本项目
2. 注册并登录 https://vercel.com
3. 点击 `Add New`，选择 `Project`
4. 选择 `Import`，导入你 Fork 的项目
5. 点击 `Deploy`，等待部署完成

# 项目结构介绍

- `index.html`：主页面，所有工具的入口
- `tools`：工具目录，每个工具为一个独立的html文件
- `tools-config.js`：工具配置文件，定义了所有工具的名称、图标、描述等信息
- `css`：css文件目录，存放了本项目使用的一些css样式
- `css/common.css`：本项目使用的一些公共css样式
- `vendor`：第三方库目录，存放了本项目使用的一些第三方库，如 `fontawesome`、`lucide.js` 等

# 4. 注意

- 本项目使用了一些第三方库，如 `fontawesome`、`highlight.js` 等，请自行分析是否符合自己的需求
- 本项目使用了 `fontawesome` 图标库，需要在 `index.html` 文件中引入 `fontawesome` 的css文件
- 本项目使用了 `highlight.js` 代码高亮库，需要在 `tools` 目录下的工具html文件中引入 `highlight.js` 的 js 文件