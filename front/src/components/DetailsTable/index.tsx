'use client';
import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

type TableComponentPropTypes = {
  tableContent: number;
};

export default function DetailsTable({
  tableContent = 1,
}: TableComponentPropTypes) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>ID</Th>
            <Th>Name</Th>
            <Th>URL</Th>
          </Tr>
        </Thead>

        <Tbody>
          {tableContent ? (
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          ) : null}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
