import { useColorMode } from '@chakra-ui/color-mode'
import { useState, useEffect } from 'react'

function useModeImage(imgKey: string) {
  const { colorMode } = useColorMode()
  let [priceImgPath, setPriceImgPath] = useState('')
  useEffect(() => {
    setPriceImgPath(`/src/assets/svg/${colorMode}/${imgKey}.svg`)
  }, [colorMode])
  return {
    priceImgPath,
  }
}

export default useModeImage
