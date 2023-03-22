import { SimpleGrid } from '@chakra-ui/react'
import { cardList, headerList, itemList } from './const'
import { Input, InputGroup, InputLeftElement, Image } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'
import CardItem from './component/Card'
import List from './component/List'
// import Table from '@/components/Table'

function Home() {
  const { colorMode } = useColorMode()
  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(4, 1fr)">
        {cardList.map((item, index) => (
          <CardItem key={index} info={item} />
        ))}
      </SimpleGrid>
      <div className="mt-40">
        <div className="flex-x-between items-center">
          <div className="text-2xl-medium">Choose your NFT collateral</div>
          <InputGroup width="auto" className="!rounded-lg">
            <InputLeftElement pointerEvents="none">
              <Image src={'/src/assets/svg/search.svg'} width={'16px'} />
            </InputLeftElement>
            <Input
              width="400px"
              placeholder="Search"
              border="none"
              className="!rounded-lg"
              bg={colorMode === 'dark' ? 'var(--color-neutral-800)' : 'var(--color-neutral-100)'}
            />
          </InputGroup>
        </div>
        <div className="dash-box mt-24">
          <List headerList={headerList} itemList={itemList}></List>
        </div>
      </div>
    </>
  )
}

export default Home
