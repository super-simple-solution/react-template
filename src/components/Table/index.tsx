import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react'
function List(props: { headerList: any[] }) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {props.headerList.map(
                (
                  item:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | null
                    | undefined,
                  index: Key | null | undefined,
                ) => (
                  <Th key={index}>{item}</Th>
                ),
              )}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
