import React from 'react'
import style from './index.module.less'
import Button from './button'
import PropTypes from 'prop-types'

const Keyboard = ({ filling }) => {
  return (
    <div
      className={style.keyboard}
      style={{
        marginTop: 20 + filling
      }}
      aria-label="Game controls"
    >
      <div className={style.left}>
        <Button
          color="primary"
          size="s1"
          top={0}
          left={98}
          label="UP"
          arrow="translate(0, 63px)"
          position
          type="up"
        />
        <Button
          color="primary"
          size="s1"
          top={180}
          left={98}
          label="DOWN"
          arrow="translate(0,-71px) rotate(180deg)"
          type="down"
        />
        <Button
          color="primary"
          size="s1"
          top={90}
          left={6}
          label="LEFT"
          arrow="translate(60px, -12px) rotate(270deg)"
          type="left"
        />
        <Button
          color="primary"
          size="s1"
          top={90}
          left={188}
          label="RIGHT"
          arrow="translate(-60px, -12px) rotate(90deg)"
          type="right"
        />
      </div>

      <Button
        color="primary"
        size="s0"
        top={100}
        left={380}
        label="ROTATE / NEXT"
        type="rotate"
      />
      <Button
        color="ghost"
        size="s2"
        top={0}
        left={540}
        label="RESET (R)"
        type="r"
      />
      <Button
        color="secondary"
        size="s2"
        top={0}
        left={450}
        label="SOUND (S)"
        type="s"
      />
      <Button
        color="secondary"
        size="s2"
        top={0}
        left={360}
        label="START (P)"
        type="p"
      />
    </div>
  )
}

Keyboard.propTypes = {
  filling: PropTypes.number.isRequired,
}

export default Keyboard
