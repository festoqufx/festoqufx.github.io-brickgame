const SCORES_KEY = 'brick-high-scores'
const MUSIC_KEY = 'brick-music'
const GAME_KEY = 'brick-last-game'

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    if (raw === null || raw === undefined) {
      return fallback
    }
    return JSON.parse(raw)
  } catch (err) {
    return fallback
  }
}

const writeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (err) {
    // Ignore quota / private-mode errors
  }
}

export const loadHighScores = (games) => {
  const saved = readJson(SCORES_KEY, {})
  return games.map((game) => ({
    ...game,
    highest: Number(saved[game.name]) || game.highest || 0,
  }))
}

export const saveHighScores = (games) => {
  const payload = games.reduce((acc, game) => {
    acc[game.name] = game.highest || 0
    return acc
  }, {})
  writeJson(SCORES_KEY, payload)
}

export const loadMusic = (fallback = true) => {
  const saved = readJson(MUSIC_KEY, null)
  return typeof saved === 'boolean' ? saved : fallback
}

export const saveMusic = (enabled) => {
  writeJson(MUSIC_KEY, enabled)
}

export const loadLastGame = (fallback = 0) => {
  const saved = readJson(GAME_KEY, fallback)
  return Number.isInteger(saved) ? saved : fallback
}

export const saveLastGame = (index) => {
  writeJson(GAME_KEY, index)
}
