import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import style from './index.module.less'

const SEGMENTS = {
  0: [1, 1, 1, 1, 1, 1, 0],
  1: [0, 1, 1, 0, 0, 0, 0],
  2: [1, 1, 0, 1, 1, 0, 1],
  3: [1, 1, 1, 1, 0, 0, 1],
  4: [0, 1, 1, 0, 0, 1, 1],
  5: [1, 0, 1, 1, 0, 1, 1],
  6: [1, 0, 1, 1, 1, 1, 1],
  7: [1, 1, 1, 0, 0, 0, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
  n: [0, 0, 0, 0, 0, 0, 0],
}

const formate = (num) => (num < 10 ? `0${num}`.split('') : `${num}`.split(''))

const Digit = ({ value }) => {
  if (value === 'd' || value === 'd_c') {
    return (
      <span className={cn(style.colon, value === 'd' && style.on)} aria-hidden="true">
        <i />
        <i />
      </span>
    )
  }
  const segs = SEGMENTS[value] || SEGMENTS.n
  return (
    <span className={style.digit} aria-hidden="true">
      {segs.map((on, idx) => (
        <i key={idx} className={cn(style[`s${idx}`], on && style.on)} />
      ))}
    </span>
  )
}

Digit.propTypes = {
  value: PropTypes.string.isRequired,
}

const Number = ({ number, length, time }) => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    if (!time) {
      return undefined
    }
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [time])

  let chars
  let label
  if (time) {
    const hour = formate(now.getHours())
    const min = formate(now.getMinutes())
    const sec = now.getSeconds() % 2
    chars = hour.concat(sec ? 'd' : 'd_c', min)
    label = `${hour.join('')}:${min.join('')}`
  } else {
    const num = `${number}`.split('')
    for (let i = 0, len = length - num.length; i < len; i++) {
      num.unshift('n')
    }
    chars = num
    label = String(number)
  }

  return (
    <div className={style.number} aria-label={label}>
      {chars.map((e, k) => (
        <Digit value={e} key={k} />
      ))}
    </div>
  )
}

Number.propTypes = {
  number: PropTypes.number,
  length: PropTypes.number,
  time: PropTypes.bool,
}

Number.defaultProps = {
  length: 6,
}

export default Number
