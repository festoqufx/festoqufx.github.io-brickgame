import React from 'react'
import style from './index.module.less'
import { isMobile } from '../../utils/helps'
import { transform } from '../../utils/const'
import cn from 'classnames'

const Guide = () => {
  if (isMobile()) {
    return null
  }

  return (
    <div className={style.outside} aria-hidden="true">
      <div className={style.colLeft}>
        <div className={style.hint}>
          <span className={style.hintLabel}>Rotate / Next</span>
          <div className={style.space}>SPACE</div>
        </div>
      </div>
      <div className={style.colRight}>
        <div className={style.hint}>
          <span className={style.hintLabel}>Move</span>
          <div className={style.pad}>
            <div className={cn(style.key, style.up)}>
              <em style={{ [transform]: 'translate(0,-3px) scale(1,2)' }} />
            </div>
            <div className={style.row}>
              <div className={style.key}>
                <em style={{ [transform]: 'translate(-7px,3px) rotate(-90deg) scale(1,2)' }} />
              </div>
              <div className={style.key}>
                <em style={{ [transform]: 'translate(0,9px) rotate(180deg) scale(1,2)' }} />
              </div>
              <div className={style.key}>
                <em style={{ [transform]: 'translate(7px,3px) rotate(90deg) scale(1,2)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guide
