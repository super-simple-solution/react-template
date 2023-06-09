import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Image, Button } from '@chakra-ui/react'
import { Key } from 'react'
import useModeImage from '@/hooks/useModeImage'
import { useNavigate } from 'react-router-dom'

function List(props: { headerList: any[]; itemList: any[] }) {
  const { priceImgPath } = useModeImage('price')
  const navigate = useNavigate()
  const jumpToDetail = (row: any) => {
    navigate(`detail?id=${row.id}`)
  }
  return (
    <>
      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              {props.headerList.map((item: any, index: Key | null | undefined) => (
                <Td key={index}>{item}</Td>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {props.itemList.map((item: any, index: Key | null | undefined) => (
              <Tr key={index}>
                <Td>
                  <div className="flex items-center">
                    <Image src={item.img}></Image>
                    <div className="ml-16">{item.name}</div>
                  </div>
                </Td>
                <Td className="number-base">{item.nfts}</Td>
                <Td className="number-base">
                  <div className="flex items-center">
                    <img src={priceImgPath} alt="Local Image" />
                    <div className="ml-6">{item.floor}</div>
                  </div>
                </Td>
                <Td className="number-base">
                  <div className="flex items-center">
                    <img src={priceImgPath} alt="Local Image" />
                    <div className="ml-6">{item.fund}</div>
                  </div>
                </Td>
                <Td className="number-base">{item.average}</Td>
                <Td className="number-base">{item.lowest}</Td>
                <Td>
                  <div className="flex items-center justify-end">
                    <Button variant="primary" className="bg-gradient" onClick={() => jumpToDetail(item)}>
                      Details
                    </Button>
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
