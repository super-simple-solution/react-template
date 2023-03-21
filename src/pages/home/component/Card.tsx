import { Card, CardHeader, CardBody, Heading, StackDivider, Text, Stack, Box } from '@chakra-ui/react'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

function CardItem({ info }: any) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {info}</Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  )
}

export default CardItem
