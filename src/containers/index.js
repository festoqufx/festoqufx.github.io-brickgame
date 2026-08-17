import React, { useEffect, useState } from 'react'
import style from './index.module.less'
import Decorate from '../components/decorate'
import Keyboard from '../components/keybord'
import Number from '../components/number'
import Music from '../components/music'
import Pause from '../components/pause'
import Welcome from '../components/welcome'
import { shallowEqual, useSelector } from 'react-redux'
import TetrisPanel from '../components/tetris-panel'
import SnakePanel from '../components/snake-panel'
import ShootingPanel from '../components/shooting-panel'
import { transform } from '../utils/const'
import Logo from '../components/logo'
import Guide from '../components/guide'
import BreakoutPanel from '../components/breakout-panel'
import RacingPanel from '../components/rancing-panel'
import TankPanel from '../components/tank-panel'
import ThemeToggle from '../components/theme-toggle'
import PauseOverlay from '../components/pause-overlay'

const panels = {
  tetris: TetrisPanel,
  snake: SnakePanel,
  shooting: ShootingPanel,
  racing: RacingPanel,
  breakout: BreakoutPanel,
  tank: TankPanel,
}

const App = () => {
  const state = useSelector((s) => s, shallowEqual)
  const { levels, speed, music, pause, game, games } = state
  const current = games[game]
  const GamePanel = panels[current.name]

  const [size, setSize] = useState({ css: {}, filling: 0 })

  useEffect(() => {
    const updateSize = () => {
      const w = document.documentElement.clientWidth
      const h = document.documentElement.clientHeight
      const ratio = h / w
      let scale
      let filling = 0
      let css = {}
      const frameH = 1020
      const frameW = 640
      const margin = 48
      if (ratio < 1.5) {
        scale = (h - margin) / frameH
      } else {
        scale = (w - margin) / frameW
        filling = (h - (frameH * scale)) / scale / 3
        css = {
          paddingTop: Math.floor(filling) + 68,
          paddingBottom: Math.floor(filling) + 16,
          marginTop: Math.floor(-510 - (filling * 1.5)),
        }
      }
      css[transform] = `scale(${scale})`
      setSize({ css, filling })
    }

    updateSize()
    let frame = 0
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateSize)
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <div className={style.chrome}>
        <ThemeToggle />
      </div>
      <main className={style.app} style={size.css} aria-label="Brick Game console">
        <div className={style.rect}>
          <Decorate />
          <div className={style.screen}>
            <div className={style.panel}>
              {GamePanel ? <GamePanel /> : null}
              {pause === 0 && <Welcome game={current.name.toUpperCase()} />}
              <PauseOverlay visible={pause === 2} />
              <div className={style.state}>
                {
                  pause === 0
                    ?
                    <>
                      <p>HI-SCORE</p>
                      <Number number={current.highest} length={6} />
                    </>
                    :
                    <>
                      <p>SCORE</p>
                      <Number number={current.score} length={6} />
                    </>
                }
                <p>LEVEL</p>
                <Number number={levels} length={6} />
                <p>SPEED</p>
                <Number number={speed} length={1} />
                {pause === 0 && <Logo />}
                <div className={style.bottom}>
                  <Music music={music} />
                  <Pause pause={pause} />
                  <Number time={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Keyboard filling={size.filling} />
        <Guide />
      </main>
    </>
  )
}

export default App
