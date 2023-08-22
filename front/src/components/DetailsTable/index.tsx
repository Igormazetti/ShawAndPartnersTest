'use client';
import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from '@chakra-ui/react';

type TableComponentPropTypes = {
  tableContent: any[];
};

export default function DetailsTable({
  tableContent,
}: TableComponentPropTypes) {
  return (
    <TableContainer
      overflowX="auto"
      overflowY="auto"
      sx={{
        '&::-webkit-scrollbar': {
          height: '6px',
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(112, 109, 109, 0.75)',
          borderRadius: '24px',
        },
      }}
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>

        <Tbody>
          {tableContent
            ? tableContent.map((item) => (
                <Tr key={item.id}>
                  <Td isNumeric>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>
                    <Link ml="8px" href={item.url} isExternal>
                      {item.url}
                    </Link>
                  </Td>
                </Tr>
              ))
            : null}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
