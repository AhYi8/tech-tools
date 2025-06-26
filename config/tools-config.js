const toolsData = {
  'AI 模块': [
    {
      name: 'AI 知识卡片生成器',
      desc: '输入主题，利用 AI 创建结构化的知识卡片。',
      icon: 'brain-circuit',
      keywords: 'ai generator knowledge card chatgpt gemini',
      targetPage: './tools/ai-card-generator.html' // 指向独立的HTML文件
    }
  ],
  "转换器": [
    { name: 'JSON <> YAML', desc: '在 JSON 和 YAML 格式之间相互转换。', icon: 'repeat-2', keywords: 'json yaml converter' },
    { name: 'Base64 字符串', desc: '对字符串进行 Base64 编码和解码。', icon: 'hash', keywords: 'base64 string encoder decoder' },
    { name: '颜色格式转换', desc: '在 HEX, RGB, HSL 等颜色格式间转换。', icon: 'palette', keywords: 'color converter hex rgb hsl' },
    { name: '时间戳转换', desc: 'Unix 时间戳和标准日期时间格式互转。', icon: 'clock', keywords: 'timestamp unixtime date time' },
    { name: '数字进制转换', desc: '在二进制、八进制、十进制、十六进制间转换。', icon: 'binary', keywords: 'base converter binary octal decimal hexadecimal' },
    { name: 'HTML 实体', desc: 'HTML 实体编码和解码。', icon: 'code', keywords: 'html entities encoder decoder' },
  ],
  "生成器": [
    { name: 'UUID 生成器', desc: '生成 v1, v4 等不同版本的 UUID。', icon: 'shield', keywords: 'uuid generator' },
    { name: '哈希计算', desc: '计算文本的 MD5, SHA-1, SHA-256 等哈希值。', icon: 'fingerprint', keywords: 'hash calculator md5 sha1 sha256' },
    { name: '密码生成', desc: '生成高度安全的随机密码。', icon: 'key-round', keywords: 'password generator' },
    { name: '二维码生成', desc: '根据文本或链接生成二维码图片。', icon: 'qr-code', keywords: 'qrcode generator' },
    { name: 'Lorem Ipsum', desc: '生成 Lorem Ipsum 占位文本。', icon: 'pilcrow', keywords: 'lorem ipsum generator placeholder text' },
    { name: 'RSA 密钥对', desc: '生成 RSA 公钥和私钥对。', icon: 'lock', keywords: 'rsa key pair generator' },
  ],
  "网络工具": [
    { name: 'User-Agent 解析', desc: '解析 User-Agent 字符串获取详细信息。', icon: 'globe-2', keywords: 'user agent parser' },
    { name: 'URL 编码/解码', desc: '对 URL 进行编码和解码。', icon: 'link', keywords: 'url encoder decoder' },
    { name: 'JWT 解析', desc: '解析 JWT (JSON Web Token) 的内容。', icon: 'album', keywords: 'jwt decoder parser json web token' },
    { name: 'HTTP 状态码', desc: '查询 HTTP 状态码的含义。', icon: 'server-cog', keywords: 'http status codes' },
  ],
  "文本工具": [
    { name: '文本对比', desc: '比较两个文本块之间的差异。', icon: 'git-commit-vertical', keywords: 'text diff compare' },
    { name: '正则表达式测试', desc: '在线测试和调试正则表达式。', icon: 'terminal', keywords: 'regex tester regular expression' },
    { name: 'JSON 格式化', desc: '美化和校验 JSON 数据格式。', icon: 'braces', keywords: 'json formatter viewer validator' },
    { name: '字数统计', desc: '统计文本中的字数、词数、行数等。', icon: 'subtitles', keywords: 'word count character statistics' },
    { name: '大小写转换', desc: '快速转换文本的大小写格式。', icon: 'case-sensitive', keywords: 'case converter uppercase lowercase' },
  ],
};
