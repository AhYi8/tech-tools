let toolsData = {
  'AI 模块': [
    {
      name: 'AI 知识卡片生成器',
      desc: '输入主题，利用 AI 创建结构化的知识卡片。',
      icon: 'brain-circuit',
      keywords: 'ai generator knowledge card chatgpt gemini',
      targetPage: './tools/ai/ai-card-generator.html' // 指向独立的HTML文件
    },
    {
      name: '幸运大转盘',
      desc: '自定义选项和颜色，来一次命运的抉择吧！',
      icon: 'award',
      keywords: 'lucky wheel draw prize raffle 抽奖 转盘 随机',
      targetPage: './tools/fun/lucky-wheel.html'
    }
  ],
  '转换工具': [
    
    {
      name: 'JSON ↔ YAML ↔ JAVA',
      desc: 'JSON、YAML、JAVA 格式相互转换，以及 JSON 格式化',
      icon: 'pencil-ruler',
      keywords: 'json yaml java 美化 格式化',
      targetPage: './tools/convert/json-yaml-java.html' // 指向独立的HTML文件
    },
    {
      name: 'JSON 转 CSV',
      desc: '将 JSON 数组转换为 CSV 格式，支持排除指定字段',
      icon: 'file-spreadsheet',
      keywords: 'json csv',
      targetPage: './tools/convert/json-to-csv.html' // 指向独立的HTML文件
    },
    {
      name: 'JSON 树状解析',
      desc: '将 JSON 解析为可交互的树状视图，方便查看和分析。',
      icon: 'file-json-2',
      keywords: 'json parser tree view format',
      targetPage: './tools/convert/json-parser.html'
    },
    {
      name: '图片转 Base64',
      desc: '将图片文件转换为 Base64 编码字符串',
      icon: 'image-upscale',
      keywords: 'base64 图片 image',
      targetPage: './tools/convert/image-to-base64.html' // 指向独立的HTML文件
    },
    {
      name: 'CSS 压缩/解压缩',
      desc: '压缩或解压缩 CSS 代码',
      icon: 'braces',
      keywords: 'css',
      targetPage: './tools/convert/css-min-unmin.html' // 指向独立的HTML文件
    },
    {
      name: 'Docker Run ↔ docker-compose',
      desc: 'Docker Run 命令与 docker-compose.yml 文件相互转换',
      icon: 'container',
      keywords: 'docker run compose yaml container 容器 部署',
      targetPage: './tools/convert/docker-run-to-compose.html'
    }
  ],
  '字符串工具': [
    {
      name: '正则表达式',
      desc: '正则表达式在线测试',
      icon: 'regex',
      keywords: 'regex regexp 正则 正则表达式',
      targetPage: './tools/string/regexp.html'
    }
  ],
  '密码学': [
    {
      name: 'Base64 编码/解码',
      desc: 'Base64 编码/解码字符串',
      icon: 'arrow-left-right',
      keywords: 'base64',
      targetPage: './tools/cryptology/base64-encrypt-decrypt.html'
    },
    {
      name: 'RSA 加密/解密',
      desc: 'RSA 非对称加密/解密工具，支持密钥对生成',
      icon: 'key',
      keywords: 'rsa encrypt decrypt 加密 解密 非对称 密钥',
      targetPage: './tools/cryptology/rsa-encrypt-decrypt.html'
    },
    {
      name: '文本 Hash',
      desc: '实时计算文本哈希值：MD5、SHA1、SHA256等',
      icon: 'hash',
      keywords: 'MD5 SHA1 SHA256 SHA224 SHA512 SHA384 SHA3 RIPEMD160',
      targetPage: './tools/cryptology/hash.html'
    }
  ],
  '趣味工具': [
    {
      name: '幸运大转盘',
      desc: '自定义选项和颜色，来一次命运的抉择吧！',
      icon: 'award',
      keywords: 'lucky wheel draw prize raffle 抽奖 转盘 随机',
      targetPage: './tools/fun/lucky-wheel.html'
    }
  ]
};

const styleConfig = {
  tool_card_columns: 4
};

// 网站配置
const siteConfig = {
  // 网站基本信息
  title: 'Tech-Tools - 在线工具箱',
  description: '科技版在线工具箱，提供各种实用的在线工具，包括转换工具、密码学工具、字符串工具等',
  keywords: 'tech-tools,在线工具,工具箱,转换工具,密码学,字符串工具,JSON,Base64,正则表达式',
  
  // 版权声明
  copyright: 'Powered by @AhYi8 ✨ &copy; 2025',
  
  // 侧边栏配置
  sidebar: {
    header: {
      title: 'Tech-Tools',
      description: '暗黑科技风格在线工具箱'
    },
    // 类目图标配置
    categoryIcons: {
      'AI 模块': 'bot',
      '转换工具': 'repeat',
      '字符串工具': 'type',
      '密码学': 'shield-check',
      '趣味工具': 'gamepad-2'
    }
  }
};