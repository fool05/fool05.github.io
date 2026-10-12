# fool · Haoyu Yang

杨浩宇的中英双语个人网站，基于 [PRISM](https://github.com/xyjoey/PRISM) 构建。

发布地址：https://fool05.github.io/

## 本地开发

使用 Node.js 24：

```sh
npm ci
npm run dev
```

## 更新内容

- `content/`：英文内容和全局配置。
- `content_zh/`：中文内容。
- `public/avatar.png`：头像。
- 简介、教育经历和荣誉分别位于 `bio.md`、`education.md`、`awards.md`。
- 联系方式和导航位于 `content/config.toml`，中文导航位于 `content_zh/config.toml`。

## 构建与发布

```sh
npm run build
```

静态文件生成在 `out/`。GitHub Pages 的发布来源设置为 **GitHub Actions** 后，向 `main` 推送修改会自动构建和发布，也可手动运行部署工作流。

## 致谢

网站基于 [xyjoey/PRISM](https://github.com/xyjoey/PRISM)，保留其 MIT 许可证。
