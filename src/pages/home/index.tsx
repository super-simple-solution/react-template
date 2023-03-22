import { SimpleGrid } from '@chakra-ui/react'
import CardItem from './component/Card'
import { cardList } from './const'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

function Home() {
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
          <InputGroup width="auto">
            <InputLeftElement pointerEvents="none" />
            <Input width="auto" />
          </InputGroup>

          {/* <Input placeholder="Basic usage" variant="unstyled" width="auto" /> */}
        </div>
      </div>
    </>
  )
}

export default Home
