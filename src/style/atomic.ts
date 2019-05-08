type IStyleValue = string

export const fill = {
  height: '100%',
  width: '100%',
  flex: 1
}

export const flex = {
  display: 'flex',
  flex: '1'
}

export const flexCenter = {
  display: 'flex',
  'justify-content': 'center',
  'flex-direction': 'column',
  'align-items': 'center'
}

export const dblock = {
  width: '100%',
  flex: '1',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%'
}

export const dinblock = {
  display: 'inline-block'
}

export const scroll = {
  overflow: 'auto'
}

export const scrollX = {
  'overflow-x': 'scroll'
}

export const scrollY = {
  'overflow-y': 'scroll'
}

export const overflow = {
  overflow: 'visible'
}

// Padding

export function p(x: IStyleValue) {
  return {
    padding: x
  }
}

export function ps(x: IStyleValue) {
  return {
    paddingLeft: x,
    paddingRight: x
  }
}

export function ptb(x: IStyleValue) {
  return {
    paddingTop: x,
    paddingBottom: x
  }
}

// Margin

export function m(x: IStyleValue) {
  return {
    margin: x
  }
}

export function ms(x: IStyleValue) {
  return {
    marginLeft: x,
    marginRight: x
  }
}

export function mtb(x: IStyleValue) {
  return {
    marginTop: x,
    marginBottom: x
  }
}

export function mb(x: IStyleValue) {
  return {
    marginBottom: x
  }
}

export function mt(x: IStyleValue) {
  return {
    marginTop: x
  }
}

// Width

export function w(x: IStyleValue) {
  return {
    width: x
  }
}

export function mw(x: IStyleValue) {
  return {
    'max-width': x
  }
}

// Height

export function h(x: IStyleValue) {
  return {
    height: x
  }
}

export function mh(x: IStyleValue) {
  return {
    maxHeight: x
  }
}

// Top

export function t(x: IStyleValue) {
  return {
    top: x
  }
}

// Right

export function r(x: IStyleValue) {
  return {
    right: x
  }
}

// Bottom

export function b(x: IStyleValue) {
  return {
    bottom: x
  }
}

// Left

export function l(x: IStyleValue) {
  return {
    left: x
  }
}

// Methods

export function dimensions(
  width: IStyleValue,
  height: IStyleValue,
  zIndex: number
) {
  return {
    width: `${width}`,
    height: `${height}`,
    zIndex: `${zIndex}`
  }
}

export function tlr(t1: IStyleValue, l1: IStyleValue, r1: IStyleValue) {
  return {
    left: l1,
    right: r1,
    top: t1
  }
}

export function blr(b1: IStyleValue, l2: IStyleValue, r2: IStyleValue) {
  return {
    left: l2,
    right: r2,
    bottom: b1
  }
}
export function cursor(value: IStyleValue) {
  return {
    cursor: value
  }
}

export function pos(value: IStyleValue) {
  return {
    position: value
  }
}

export function pull(direction: IStyleValue) {
  return {
    float: direction
  }
}

export function flexDirection(direction: any) {
  return {
    display: 'flex',
    flexDirection: direction
  }
}

export function backgroundImage(url: IStyleValue) {
  return {
    backgroundImage: `url(${url})`
  }
}

export function backgroundColor(color: IStyleValue) {
  return {
    backgroundColor: `${color}`
  }
}

export function borderRadius(rad: IStyleValue) {
  return {
    borderRadius: `${rad}`
  }
}

export function border(direction: 'bottom', string: string) {
  if (direction === 'bottom') {
    return {
      [`border-${direction}`]: string
    }
  }
}

export function textAlign(align: string) {
  if (align === 'center') {
    return {
      'text-align': 'center'
    }
  } else {
    return {
      'text-align': 'inherit'
    }
  }
}
