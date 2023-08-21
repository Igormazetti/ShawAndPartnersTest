'use client';

import React from 'react';
import { Flex, Image, VStack, Text, Box } from '@chakra-ui/react';

type UserCardTypes = {
  id: number;
  login: string;
  avatar: string;
  profileUrl: string;
  createdAt: string;
};

export default function UserDetailsCard({
  id,
  login,
  avatar,
  profileUrl,
  createdAt,
}: UserCardTypes) {
  return (
    <Flex
      mb="10px"
      gap="16px"
      borderRadius="8px"
      border="1px solid rgba(112, 109, 109, 0.75)"
      padding="8px 8px"
    >
      <Image maxH="100px" src={avatar} borderRadius="50%" mr="20px" />
      <VStack alignItems="flex-start" justifyContent="center" gap="10px">
        <Text>userName: {login}</Text>
        <Text>id: {id}</Text>
        <Text>Profile URL: {profileUrl}</Text>
        <Text>Date of creation: {createdAt}</Text>
      </VStack>
    </Flex>
  );
}
