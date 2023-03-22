import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
function card() {
  return (
    <>
      <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="unstyled" bg="0">
        <Image objectFit="cover" maxW={{ base: '100%', sm: '400px' }} src={'src/assets/img-1.png'} />

        <Stack pl={'36px'} className="w-full">
          <CardBody p={0}>
            <div className="text-2xl-medium">CloneX #6496</div>
            <div className="mt-24">
              <div className="flex-x-between w-full">
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
              </div>
              <div className="flex-x-between mt-[40px] w-full">
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
                <div className="flex">
                  <Image src={'/src/assets/svg/borrow.svg'}></Image>
                  <div className="ml-16">
                    <div className="text-neutral-500">Reserved ETH</div>
                    <div className="number-2xl">1444,754.53 ETH</div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>

          <CardFooter pb={0}>
            <Button variant="outline" className="border-gradient">
              Buy Latte
            </Button>
            <Button variant="primary" className="bg-gradient">
              Borrow ETH
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}

export default card
