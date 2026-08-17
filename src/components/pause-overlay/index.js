import React from 'react'
import PropTypes from 'prop-types'
import style from './index.module.less'

const PauseOverlay = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className={style.overlay} role="status" aria-live="polite">
      <div className={style.card}>
        <strong>Paused</strong>
        <span>Press START (P) to resume</span>
      </div>
    </div>
  )
}

PauseOverlay.propTypes = {
  visible: PropTypes.bool,
}

export default PauseOverlay
