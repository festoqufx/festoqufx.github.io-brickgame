import React, { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import style from './index.module.less'
import { transform } from '../../../utils/const'
import control from '../../../control'
import { shallowEqual, useSelector } from 'react-redux'
import { isMobile } from '../../../utils/helps'
import { initGameData } from '../../../utils/games'
import PropTypes from 'prop-types'
import { emitInput, INPUT_EVENT } from '../../../utils/inputEvents'

const Button = ({ color, size, top, left, label, position, arrow, type }) => {
  const [active, setActive] = useState(false)
  const pressedByPointer = useRef(false)
  const pause = useSelector(state => state.pause, shallowEqual)
  const game = useSelector(state => state.game, shallowEqual)

  const memoHandleDown = useCallback(
    () => {
      setActive(true)
      emitInput(type, true)
      if (pause === 0) {
        control['todo'][type]()
      } else {
        control[initGameData[game].name][type]()
      }
    },
    [pause, game, type]
  )

  const memoHandleUp = useCallback(
    () => {
      setActive(false)
      emitInput(type, false)
      control.clearLoop()
    },
    [type]
  )

  const onPointerDown = useCallback((e) => {
    if (e.cancelable) {
      e.preventDefault()
    }
    pressedByPointer.current = true
    memoHandleDown()
  }, [memoHandleDown])

  const onPointerUp = useCallback(() => {
    if (!pressedByPointer.current) {
      return
    }
    pressedByPointer.current = false
    memoHandleUp()
  }, [memoHandleUp])

  useEffect(() => {
    const onInput = (event) => {
      if (event.detail && event.detail.type === type) {
        setActive(Boolean(event.detail.active))
      }
    }
    window.addEventListener(INPUT_EVENT, onInput)
    return () => window.removeEventListener(INPUT_EVENT, onInput)
  }, [type])

  const handlers = isMobile()
    ? {
      onTouchStart: onPointerDown,
      onTouchEnd: onPointerUp,
      onTouchCancel: onPointerUp,
    }
    : {
      onMouseDown: onPointerDown,
      onMouseUp: onPointerUp,
      onMouseLeave: onPointerUp,
    }

  return (
    <div
      className={cn(style.button, style[color], style[size])}
      style={{ top, left }}
      role="button"
      tabIndex={-1}
      aria-label={label}
      onContextMenu={(e) => e.preventDefault()}
      {...handlers}
    >
      <i className={cn({ [style.active]: active })} />
      {size === 's1' && (
        <em
          style={{
            [transform]: `${arrow} scale(1,2)`,
          }}
        />
      )}
      <span className={cn({ [style.position]: position })}>{label}</span>
    </div>
  )
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  position: PropTypes.bool,
  arrow: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Button
