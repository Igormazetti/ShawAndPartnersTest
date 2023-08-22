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
import { UserRepositoriesData } from 'src/hooks/userDetailsHook';

type TableComponentPropTypes = {
  tableContent: UserRepositoriesData[];
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
            <Th color="rgba(13, 184, 28, 0.75)">ID</Th>
            <Th color="rgba(13, 184, 28, 0.75)">Name</Th>
            <Th color="rgba(13, 184, 28, 0.75)">URL</Th>
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
