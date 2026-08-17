import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export const THEME_STORAGE_KEY = 'brick-theme'

const ThemeContext = createContext(null)

export const getSystemTheme = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return 'light'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const applyTheme = (resolved) => {
  const root = document.documentElement
  root.setAttribute('data-theme', resolved)
  root.style.colorScheme = resolved
  const themeColor = resolved === 'dark' ? '#0a0a0a' : '#f3f3f3'
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', themeColor)
  }
}

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) || 'system'
    } catch (_err) {
      return 'system'
    }
  })

  const resolved = mode === 'system' ? getSystemTheme() : mode

  useEffect(() => {
    const next = mode === 'system' ? getSystemTheme() : mode
    applyTheme(next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode)
    } catch (_err) {
      // Ignore quota / private-mode errors
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (mode === 'system') {
        applyTheme(getSystemTheme())
      }
    }
    if (media.addEventListener) {
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    }
    media.addListener(onChange)
    return () => media.removeListener(onChange)
  }, [mode])

  const toggle = useCallback(() => {
    setMode((prev) => {
      const current = prev === 'system' ? getSystemTheme() : prev
      return current === 'dark' ? 'light' : 'dark'
    })
  }, [])

  const value = useMemo(
    () => ({ mode, resolved, setMode, toggle }),
    [mode, resolved, toggle]
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
