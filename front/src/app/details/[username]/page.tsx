'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { api } from 'src/api';
import { useQuery } from '@tanstack/react-query';
import { Center, Flex, Spinner } from '@chakra-ui/react';
import { BiSolidUserCircle } from 'react-icons/bi';

export default function Details() {
  const { username } = useParams();

  async function fetchData() {
    const request = await api.get(`/details/${username}`);

    return request.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchData,
    retry: false,
  });

  console.log(data);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner color="#FFF" size="xl" />
      </Center>
    );
  }

  return (
    <Flex
      minH="100vh"
      bg="#141414"
      color="#FFF"
      direction="column"
      alignItems="center"
      gap="50px"
      p="50px 20px"
    >
      <Flex fontSize="30px" fontWeight="700" alignItems="center" gap="10px">
        <BiSolidUserCircle size={40} />
        {username} details
      </Flex>

      <Flex
        direction="column"
        maxW="700px"
        w="full"
        p="30px"
        maxH="700px"
        overflowY="auto"
        sx={{
          '&::-webkit-scrollbar': {
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
        borderRadius="8px"
        bg="#111111"
        color="#FFF"
        boxShadow="0px 0px 12px 8px rgba(46, 45, 45, 0.75)"
      ></Flex>
    </Flex>
  );
}
