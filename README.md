# 张建斌｜AI 产品经理｜网页简历

这是一个纯静态中文简历网站，不依赖 React、Vite 或构建步骤。

## 文件说明

- `index.html`：网页内容
- `styles.css`：页面样式与打印样式
- `script.js`：复制、打印、回到顶部等少量交互
- `resume.md`：原始 Markdown 简历

## 本地查看

直接用浏览器打开 `index.html` 即可。

也可以用任意静态服务器预览，例如：

```bash
python -m http.server 5173
```

然后访问 `http://localhost:5173/`。

## GitHub Pages 发布

仓库已包含 `.github/workflows/deploy-pages.yml`。发布步骤：

1. 在 GitHub 新建仓库，例如 `resume-web-zhangjianbin`。
2. 把本目录推送到 `master` 或 `main` 分支。
3. 进入 GitHub 仓库的 `Settings` → `Pages`。
4. 在 `Build and deployment` 中选择 `GitHub Actions`。
5. 推送后，Actions 会直接发布这个静态站点。

如果不想用 Actions，也可以在 GitHub Pages 中选择 `Deploy from a branch`，分支选 `master` 或 `main`，目录选 `/root`。

## 隐私提醒

当前页面和源码都包含手机号、邮箱、LinkedIn 和完整工作经历。如果仓库设为公开，这些信息也会公开。
"# resume" 
