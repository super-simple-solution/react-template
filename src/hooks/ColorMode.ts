function ColorMode() {
  let colorMode = 'light'

  function toggleColorMode() {
    colorMode = colorMode === 'light' ? 'dark' : 'light'
  }
  return {
    colorMode,
    toggleColorMode,
  }
}

export default ColorMode
