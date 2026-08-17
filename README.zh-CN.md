# React Brick Game

用 React 函数组件和 Redux Toolkit 重写的经典掌上方块游戏，界面为现代黑白风格，并支持浅色 / 深色模式。包含俄罗斯方块、贪吃蛇、坦克大战、赛车、射击和弹珠。

灵感来自 [react-tetris](https://github.com/chvin/react-tetris)。

在线试玩：[https://quekaihua.github.io/brick-game/](https://quekaihua.github.io/brick-game/)

## 功能

- 六款游戏：坦克、俄罗斯方块、贪吃蛇、射击、赛车、弹珠
- 浅色模式与深色模式，跟随系统偏好，并记住你的选择
- 最高分、上次选择的游戏、音效开关保存在 localStorage
- 键盘、鼠标、触摸操作
- 响应式掌机布局，适配手机、平板和桌面
- 无障碍控制、暂停提示、减少动画偏好

## 操作

| 操作 | 键盘 | 屏幕按键 |
| --- | --- | --- |
| 移动 / 调整关卡与速度 | 方向键、W A D | 方向键 |
| 旋转 / 下一款游戏 | 空格 | ROTATE |
| 开始 / 暂停 | P 或 Esc | START |
| 音效开关 | S | SOUND |
| 重置 | R | RESET |

手机请使用屏幕按键。电脑端会显示二维码，方便在手机上打开同一页面。

## 主题

右上角 **Light / Dark** 可切换主题。选择会保存在本地；未选择时跟随系统 `prefers-color-scheme`。

## 环境要求

- **Node.js 24**（当前 LTS，24.19.x）或更高
- npm 10+

仓库通过 `.nvmrc`、`.node-version` 和 `package.json` 的 `engines` 固定 Node 24，便于 Vercel 与本地使用同一运行时。

## 开发

```bash
npm install
npm start
```

浏览器会打开 [http://127.0.0.1:3000/](http://127.0.0.1:3000/)。

```bash
npm run build
npm test
npm run lint
```

生产文件输出到 `build/`。

## 部署到 Vercel

这是 ejected 后的 Create React App 静态站点。`vercel.json` 已配置：

- 构建命令：`npm run build`
- 输出目录：`build`
- Node.js：`24.x`

将仓库导入 [Vercel](https://vercel.com/new) 后直接部署即可。
