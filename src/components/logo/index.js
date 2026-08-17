import React, { useEffect, useState } from 'react'
import style from './index.module.less'

const Logo = () => {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 8)
    }, 180)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={style.logo} aria-hidden="true">
      <div className={style.mascot} data-frame={frame}>
        <b className="c" />
        <b className="c" />
        <div className="clear" />
        <b className="c" />
        <b className="c" />
        <div className="clear" />
        <b className={frame % 2 === 0 ? 'c' : ''} />
        <b className={frame % 2 === 1 ? 'c' : ''} />
      </div>
    </div>
  )
}

export default Logo
