import React from 'react'
import cn from 'classnames'
import style from './index.module.less'
import PropTypes from 'prop-types'

const Music = ({ music }) => {
  return (
    <div
      className={cn(style.music, !music && style.off)}
      aria-label={music ? 'Sound on' : 'Sound off'}
      title={music ? 'Sound on' : 'Sound off'}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M4 10v4h3l4 4V6L7 10H4z" fill="currentColor" />
        {music ? (
          <path d="M15 9a4 4 0 0 1 0 6M17.5 7a7 7 0 0 1 0 10" fill="none" stroke="currentColor" strokeWidth="1.8" />
        ) : (
          <path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        )}
      </svg>
    </div>
  )
}

Music.propTypes = {
  music: PropTypes.bool.isRequired
}

export default Music
