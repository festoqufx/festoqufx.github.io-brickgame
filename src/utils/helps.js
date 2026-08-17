export const copyData = (src) => {
  const res = []
  for (let l of src) {
    if (typeof l === 'object') {
      const [...line] = l
      res.push(line)
    } else {
      res.push(l)
    }
  }
  return res
}

export const isMobile = () => {
  const ua = navigator.userAgent
  const android = /Android/i.test(ua)
  const iphone = ua.indexOf('iPhone') > -1
  const ipod = ua.indexOf('iPod') > -1
  const ipad = ua.indexOf('iPad') > -1
  const ipadOs = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  const nokiaN = ua.indexOf('NokiaN') > -1
  return android || iphone || ipod || ipad || ipadOs || nokiaN
}