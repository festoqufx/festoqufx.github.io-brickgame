# React Brick Game

Classic handheld brick games rebuilt with React function components, Redux Toolkit, and a modern black-and-white interface. Play Tetris, Snake, Tank, Racing, Shooting, and Breakout in the browser.

Inspired by [react-tetris](https://github.com/festoqufx/festoqufx.github.io-brickgame). This project is fully rewritten with hooks and Redux.

Live demo: [https://festoqufx-github-io-brickgame.vercel.app/](https://festoqufx-github-io-brickgame.vercel.app/)




## Features

- Six games: Tank, Tetris, Snake, Shooting, Racing, and Breakout
- Light mode and dark mode, with system preference detection and persistence
- High scores, last selected game, and sound preference saved in localStorage
- Keyboard, mouse, and touch controls
- Responsive handheld layout that scales to phone, tablet, and desktop
- Accessible controls, pause overlay, and reduced-motion support

## Controls

| Action | Keyboard | On-screen |
| --- | --- | --- |
| Move / change level & speed | Arrow keys, W A D | D-pad |
| Rotate piece / next game | Space | Rotate |
| Start / pause | P or Esc | START |
| Sound on/off | S | SOUND |
| Reset | R | RESET |

On phones, use the on-screen buttons. On desktop, a QR code appears so you can open the same session on a phone.

## Theme

Use the **Light / Dark** toggle in the top-right corner. Your choice is stored locally. If you have not chosen a theme, the app follows `prefers-color-scheme`.

## Requirements

- **Node.js 24** (latest LTS, currently 24.19.x) or newer
- npm 10+

The repo pins Node 24 in `.nvmrc`, `.node-version`, and `package.json` `engines` so Vercel and local tooling use the same runtime.

## Development

```bash
npm install
npm start
```



```bash
npm run build
npm test
npm run lint
```

Production files are written to `build/`.

## Deploy on Vercel

This is a static Create React App (ejected) project. Vercel settings are already in `vercel.json`:

- Build command: `npm run build`
- Output directory: `build`
- Node.js: `24.x`

Deploy:

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Leave Framework Preset empty (or Other) — `vercel.json` already sets the output directory
4. Deploy

SPA routes rewrite to `index.html`. Source maps are disabled in production to keep the Vercel build within memory limits. Asset paths use a relative `homepage` (`.`) so the app works at the domain root.

## Architecture

- `src/containers` — console shell, scaling, and HUD
- `src/components` — screen, keyboard, theme toggle, and overlays
- `src/games` — game logic
- `src/control` — keyboard and on-screen input
- `src/store` — Redux Toolkit slices
- `src/theme` — light/dark CSS variables and provider

## License

MIT
