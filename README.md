# Tech-Tools 🚀

<div align="center">

![Tech-Tools](https://img.shields.io/badge/Tech--Tools-v1.0-blue?style=for-the-badge&logo=tools)![License](https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**一款极具炫酷科技风格的在线工具集合网站**

[🌟 在线体验](https://tech-tools-swart.vercel.app/) • [📖 文档](#项目特性) • [🛠️ 开发](#开发指南) • [🚀 部署](#部署方案)

</div>

---

## 📋 目录

- [✨ 项目特性](#✨-项目特性)
- [🚀 快速开始](#🚀-快速开始)
- [🛠️ 工具列表](#🛠️-工具列表)
- [🏛️ 技术架构](#🏛️-技术架构)
- [📁 项目结构](#📁-项目结构)
- [🔧 开发指南](#🔧-开发指南)
- [📦 部署方案](#📦-部署方案)
- [🤝 贡献指南](#🤝-贡献指南)
- [📄 许可证](#📄-许可证)
- [🙏 致谢](#🙏-致谢)

## ✨ 项目特性

### 🎨 设计特色
- **暗黑科技风格**：采用深色主题，配合动态星空背景和霓虹色彩
- **响应式设计**：完美适配桌面端、平板和移动设备
- **流畅动画**：丰富的CSS动画和过渡效果，提升用户体验
- **现代UI**：基于现代设计语言，简洁而不失科技感

### 🏗️ 技术特色
- **零依赖框架**：纯HTML/CSS/JavaScript实现，无需任何前端框架
- **模块化架构**：每个工具都是独立的HTML页面，可单独运行
- **配置驱动**：通过配置文件动态管理工具，易于扩展
- **本地存储**：支持工具排序、收藏等个性化设置

### 🚀 功能特色
- **拖拽排序**：支持工具卡片拖拽重新排列
- **智能搜索**：实时搜索工具，支持名称和关键词匹配
- **收藏系统**：收藏常用工具，快速访问
- **滚动同步**：侧边栏导航与内容区域滚动同步高亮

## 🚀 快速开始

### 方式一：直接使用
```bash
# 克隆项目
git clone https://github.com/your-username/tech-tools.git

# 进入项目目录
cd tech-tools

# 直接打开 index.html 文件
# 或使用本地服务器
python -m http.server 8000
```

### 方式二：在线体验
访问在线演示：[Tech-Tools Demo](https://tech-tools-swart.vercel.app/)

## 🛠️ 工具列表

### 🤖 AI 模块
- **AI 知识卡片生成器** - 利用AI创建结构化知识卡片
- **幸运大转盘** - 自定义选项的随机抽奖工具

### 🔄 转换工具
- **JSON ↔ YAML ↔ JAVA** - 多格式数据转换和格式化
- **JSON 转 CSV** - JSON数组转CSV格式，支持字段过滤
- **JSON 树状解析** - 可交互的JSON树状视图
- **图片转 Base64** - 图片文件转Base64编码
- **CSS 压缩/解压缩** - CSS代码压缩和格式化

### 🔤 字符串工具
- **正则表达式** - 在线正则表达式测试工具

### 🔐 密码学
- **Base64 编码/解码** - Base64字符串编解码
- **RSA 加密/解密** - RSA非对称加密，支持密钥对生成
- **文本 Hash** - 多种哈希算法：MD5、SHA1、SHA256等

### 🎮 趣味工具
- **幸运大转盘** - 自定义选项和颜色的抽奖转盘

## 🏛️ 技术架构

### 前端技术栈
- **HTML5** - 语义化标记和现代Web标准
- **CSS3** - 自定义属性、Grid/Flexbox布局、动画
- **Vanilla JavaScript** - 原生ES6+，无框架依赖
- **Tailwind CSS** - 实用优先的CSS框架
- **Lucide Icons** - 现代化图标库

### 核心库依赖
```
vendor/
├── js/
│   ├── tailwind.js          # CSS框架
│   ├── lucide.js           # 图标库
│   ├── Sortable.min.js     # 拖拽排序
│   ├── crypto-js.min.js    # 加密算法
│   ├── js-yaml.min.js      # YAML解析
│   ├── jsencrypt.min.js    # RSA加密
│   └── html2canvas.min.js  # 截图功能
├── css/
│   └── google-fonts.css    # 字体文件
└── fonts/                  # 字体资源
```

### 设计系统
```css
:root {
  --bg-color: #0d1117;              /* 主背景色 */
  --sidebar-bg-color: #161b22;      /* 侧边栏背景 */
  --card-bg-color: rgba(22, 27, 34, 0.85); /* 卡片背景 */
  --border-color: rgba(139, 148, 158, 0.2); /* 边框色 */
  --text-color: #c9d1d9;            /* 主文字色 */
  --text-secondary-color: #8b949e;   /* 次要文字色 */
  --accent-color: #58a6ff;          /* 强调色 */
}
```

## 📁 项目结构

```
tech-tools/
├── 📄 index.html              # 主页面入口
├── 📁 config/                 # 配置文件
│   └── tools-config.js        # 工具配置和网站设置
├── 📁 css/                    # 样式文件
│   └── common.css             # 公共样式和设计系统
├── 📁 tools/                  # 工具页面
│   ├── 📁 ai/                 # AI相关工具
│   ├── 📁 convert/            # 转换工具
│   ├── 📁 cryptology/         # 密码学工具
│   ├── 📁 fun/                # 趣味工具
│   └── 📁 string/             # 字符串工具
├── 📁 vendor/                 # 第三方库
│   ├── 📁 js/                 # JavaScript库
│   ├── 📁 css/                # CSS库
│   └── 📁 fonts/              # 字体文件
├── 📄 favicon.ico             # 网站图标
├── 📄 LICENSE                 # Apache 2.0 许可证
└── 📄 README.md               # 项目文档
```

## 🔧 开发指南

### 添加新工具

1. **创建工具页面**
```bash
# 在对应分类目录下创建HTML文件
touch tools/convert/new-tool.html
```

2. **更新配置文件**
```javascript
// config/tools-config.js
'转换工具': [
  {
    name: '新工具名称',
    desc: '工具描述',
    icon: 'lucide-icon-name',
    keywords: '搜索关键词',
    targetPage: './tools/convert/new-tool.html'
  }
]
```

3. **遵循设计规范**
- 使用统一的CSS变量和类名
- 保持暗黑科技风格
- 确保响应式设计
- 添加适当的动画效果

### 开发环境设置

```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000

# 或使用PHP
php -S localhost:8000
```

### 代码规范

- **HTML**: 使用语义化标签，保持结构清晰
- **CSS**: 使用CSS自定义属性，遵循BEM命名规范
- **JavaScript**: 使用ES6+语法，保持代码简洁
- **配置**: 及时更新tools-config.js文件

## 📦 部署方案

### 静态网站托管

#### Vercel (推荐)
```bash
# 安装Vercel CLI
npm i -g vercel

# 部署
vercel --prod
```

#### Cloudflare Pages
1. 连接GitHub仓库
2. 设置构建命令：无需构建
3. 设置输出目录：`/`

#### GitHub Pages
1. 在仓库设置中启用GitHub Pages
2. 选择源分支：`main`
3. 访问：`https://username.github.io/tech-tools`

#### Netlify
1. 连接GitHub仓库
2. 构建设置：
   - 构建命令：留空
   - 发布目录：`/`

### 自托管部署

#### Nginx配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/tech-tools;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Docker部署
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！

### 贡献方式
- 🐛 报告Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码

### 开发流程
1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 代码提交规范
```
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 📄 许可证

本项目采用 [Apache License 2.0](LICENSE) 许可证。

## 🙏 致谢

- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Lucide](https://lucide.dev/) - 美观的开源图标库
- [SortableJS](https://sortablejs.github.io/Sortable/) - 拖拽排序库
- [CryptoJS](https://cryptojs.gitbook.io/) - JavaScript加密库

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

Made with ❤️ by [AhYi8](https://github.com/AhYi8)

</div>
