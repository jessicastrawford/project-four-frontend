import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from '@chakra-ui/react'


function MeasurementTable({ design }) {
  return (
    <ChakraProvider>
      <div className="table">
        <Table variant="simple" size="sm">
          {/* <TableCaption>{design.name}</TableCaption> */}
          <Thead>
            <Tr>
              <Th> </Th>
              <Th>Measurement in cm</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Center Back Length</Td>
              <Td>{design.centerBackLength}</Td>
            </Tr>
            <Tr>
              <Td>Center Front Length</Td>
              <Td>{design.centerFrontLength}</Td>
            </Tr>
            <Tr>
              <Td>Sleeve Length</Td>
              <Td>{design.sleeveLength}</Td>
            </Tr>
            <Tr>
              <Td>Hem Length</Td>
              <Td>{design.hemLength}</Td>
            </Tr>
            <Tr>
              <Td>Chest</Td>
              <Td>{design.chest}</Td>
            </Tr>
            <Tr>
              <Td>Waist</Td>
              <Td>{design.waist}</Td>
            </Tr>
            <Tr>
              <Td>Inside Leg Length</Td>
              <Td>{design.insideLegLength}</Td>
            </Tr>
            <Tr>
              <Td>Outside Leg Length</Td>
              <Td>{design.outsideLegLength}</Td>
            </Tr>
          </Tbody>  
        </Table>
      </div>
    </ChakraProvider>
  )
}

export default MeasurementTable
