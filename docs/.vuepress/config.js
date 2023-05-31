const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "test",
  description: 'vdoing博客主题模板',
  base: '/test/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "0e6f6bee41591a27f8fe",
        clientSecret: "dfc17dfa6dcf8959e3eb0e7dc57726765ed2dbd1",
        owner: "lql95",
        repo: "lql-notes",
      },
    ],
  ],

}