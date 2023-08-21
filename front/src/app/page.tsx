'use client';
import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import { useQuery } from '@tanstack/react-query';
import { api } from 'src/api';

export default function page() {
  async function fetchData() {
    const request = await api.get('');

    return request.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchData,
    retry: false,
  });

  return (
    <Flex
      minH="100vh"
      bg="#141414"
      color="#FFF"
      direction="column"
      alignItems="center"
      gap="30px"
      p="50px 20px"
    >
      <Flex fontSize="30px" fontWeight="700" alignItems="center" gap="10px">
        <VscGithub size={40} />
        Github Users List
      </Flex>
      <Flex
        direction="column"
        maxW="800px"
        w="full"
        p="30px"
        borderRadius="8px"
        bg="#111111"
        color="#FFF"
        boxShadow="0px 0px 12px 8px rgba(46, 45, 45, 0.75)"
      ></Flex>
    </Flex>
  );
}
