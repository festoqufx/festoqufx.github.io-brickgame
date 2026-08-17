import React from 'react'
import style from './index.module.less'
import PropTypes from 'prop-types'

const Welcome = ({ game }) => {
  return (
    <div className={style.welcome}>
      <h3>WELCOME</h3>
      <div className={style.game}>{game}</div>
      <div className={style.hints}>
        <p>Arrows: level / speed</p>
        <p>Rotate: next game</p>
        <p>Start (P): play</p>
      </div>
    </div>
  )
}

Welcome.propTypes = {
  game: PropTypes.string.isRequired
}

export default Welcome
