'use client';

import { Flex, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';

type UserCardTypes = {
  id: number;
  login: string;
  avatar: string;
};

export default function UserCard({ id, login, avatar }: UserCardTypes) {
  return (
    <Flex
      mb="10px"
      gap="16px"
      borderRadius="8px"
      border="1px solid rgba(112, 109, 109, 0.75)"
      padding="8px 8px"
      cursor="pointer"
      transition="0.2s all ease-in-out"
      _hover={{
        opacity: '0.7',
      }}
    >
      <Image maxH="80px" src={avatar} borderRadius="8px" />
      <VStack alignItems="flex-start" justifyContent="center">
        <Text>{id}</Text>
        <Text>{login}</Text>
      </VStack>
    </Flex>
  );
}
