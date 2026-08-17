import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.less'

const Pause = ({ pause }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (pause !== 2) {
      setShow(false)
      return undefined
    }
    const timer = setInterval(() => {
      setShow((prev) => !prev)
    }, 250)
    return () => clearInterval(timer)
  }, [pause])

  return (
    <div
      className={cn(style.pause, show && style.on)}
      aria-label={pause === 2 ? 'Paused' : 'Playing'}
      title={pause === 2 ? 'Paused' : 'Playing'}
    >
      <span />
      <span />
    </div>
  )
}

Pause.propTypes = {
  pause: PropTypes.number.isRequired
}

export default Pause
