import React from 'react'
import { useTheme } from '../../theme'
import style from './index.module.less'

const ThemeToggle = () => {
  const { resolved, toggle } = useTheme()
  const isDark = resolved === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      className={style.toggle}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span className={style.icon} aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M16.5 13.5A7 7 0 0 1 10.5 3a7.5 7.5 0 1 0 6 10.5z" />
          </svg>
        )}
      </span>
      <span className={style.text}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
