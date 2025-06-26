const toolsData = {
  'AI 模块': [
    {
      name: 'AI 知识卡片生成器',
      desc: '输入主题，利用 AI 创建结构化的知识卡片。',
      icon: 'brain-circuit',
      keywords: 'ai generator knowledge card chatgpt gemini',
      targetPage: './tools/ai/ai-card-generator.html' // 指向独立的HTML文件
    }
  ],
  '转换工具': [
    {
      name: 'JSON ↔ YAML ↔ JAVA',
      desc: 'JSON、YAML、JAVA 格式相互转换',
      icon: 'pencil-ruler',
      keywords: 'json yaml java',
      targetPage: './tools/convert/json-yaml-java.html' // 指向独立的HTML文件
    },
    {
      name: 'JSON 转 CSV',
      desc: '将 JSON 数组转换为 CSV 格式，支持排除指定字段',
      icon: 'file-spreadsheet',
      keywords: 'json csv',
      targetPage: './tools/convert/json-to-csv.html' // 指向独立的HTML文件
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
};
