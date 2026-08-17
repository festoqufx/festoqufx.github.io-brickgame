import store from '../store'
import control from '.'
import { initGameData } from '../utils/games'
import { emitInput } from '../utils/inputEvents'

const keyboard = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  32: 'rotate',
  83: 's',
  82: 'r',
  80: 'p',
  87: 'up',
  65: 'left',
  68: 'right',
  27: 'p',
}

let keydownActive

const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10))

const keyDown = (e) => {
  if (e.metaKey === true || e.ctrlKey === true || e.altKey === true) {
    return
  }
  if (boardKeys.indexOf(e.keyCode) === -1) {
    return
  }
  e.preventDefault()
  const type = keyboard[e.keyCode]
  if (type === keydownActive) {
    return
  }
  keydownActive = type
  emitInput(type, true)
  const { pause, game } = store.getState()
  if (pause === 0) {
    control['todo'][type]()
  } else {
    control[initGameData[game].name][type]()
  }
}

const keyUp = (e) => {
  if (boardKeys.indexOf(e.keyCode) === -1) {
    return
  }
  e.preventDefault()
  const type = keyboard[e.keyCode]
  if (type === keydownActive) {
    control.clearLoop()
    emitInput(type, false)
    keydownActive = ''
  }
}

document.addEventListener('keydown', keyDown, true)
document.addEventListener('keyup', keyUp, true)
window.addEventListener('blur', () => {
  control.clearLoop()
  if (keydownActive) {
    emitInput(keydownActive, false)
    keydownActive = ''
  }
})
