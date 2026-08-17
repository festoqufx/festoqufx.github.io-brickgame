export const INPUT_EVENT = 'brick-input'

export const emitInput = (type, active) => {
  if (typeof window === 'undefined') {
    return
  }
  window.dispatchEvent(
    new CustomEvent(INPUT_EVENT, {
      detail: { type, active },
    })
  )
}
