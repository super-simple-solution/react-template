import { Card, CardHeader, CardBody, Image } from '@chakra-ui/react'

function CardItem({ info }: any) {
  return (
    <Card borderRadius="2xl" boxShadow="none">
      <CardHeader>
        <div className={`flex-xy-center h-40 w-40 rounded-full ${info.class_name}`}>
          <Image boxSize="16px" src={info.img} />
        </div>
      </CardHeader>
      <CardBody>
        <div className="text-sm-normal">{info.text}</div>
        <div className="number-4xl mt-6 flex">
          <div>{info.value}</div>
          <div>{info.unit}</div>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardItem
