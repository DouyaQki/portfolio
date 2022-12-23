const spaceOperator = (el) => {
  if (/[/*+]/.test(el)) return el.replace(/[/*+]/, ` ${el} `)
  return el
}

export default spaceOperator
