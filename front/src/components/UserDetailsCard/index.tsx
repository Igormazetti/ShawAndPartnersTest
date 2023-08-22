'use client';

import React from 'react';
import { Flex, Image, VStack, Text, Link } from '@chakra-ui/react';
import { parseISO, format } from 'date-fns';

type UserCardTypes = {
  id: number;
  login: string;
  avatar: string;
  profileUrl: string;
  createdAt: string;
  repositories: any[];
};

export default function UserDetailsCard({
  id,
  login,
  avatar,
  profileUrl,
  createdAt,
}: UserCardTypes) {
  function formatTime(createdAt: string): string {
    const date = parseISO(createdAt);
    return format(date, 'dd/MM/yyyy');
  }

  return (
    <Flex
      mb="10px"
      gap="16px"
      borderRadius="8px"
      border="1px solid rgba(112, 109, 109, 0.75)"
      padding="8px 8px"
      alignItems="center"
    >
      <Image
        maxH={{ base: '80px', md: '100px' }}
        src={avatar}
        borderRadius="50%"
        mr={{ base: '0px', md: '10px' }}
      />
      <VStack
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
        gap="10px"
      >
        <Text>Username: {login}</Text>
        <Text>Id: {id}</Text>
        <Text maxW={{ base: '140px', sm: 'full' }}>
          Profile URL:{' '}
          <Link href={profileUrl} isExternal>
            {profileUrl}
          </Link>
        </Text>
        <Text>Date of creation: {formatTime(createdAt)}</Text>
      </VStack>
    </Flex>
  );
}
