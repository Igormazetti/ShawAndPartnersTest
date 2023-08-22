'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Center, Flex, Spinner } from '@chakra-ui/react';
import { BiSolidUserCircle } from 'react-icons/bi';
import UserDetailsCard from 'src/components/UserDetailsCard';
import useUsersDetailsHook from 'src/hooks/userDetailsHook';
import DetailsTable from 'src/components/DetailsTable';

export default function Details() {
  const { username } = useParams();
  const { details, loading } = useUsersDetailsHook(username as string);

  if (loading) {
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
        maxW="900px"
        w="full"
        p="30px"
        maxH="700px"
        borderRadius="8px"
        bg="#111111"
        color="#FFF"
        boxShadow="0px 0px 12px 8px rgba(46, 45, 45, 0.75)"
      >
        {details && details.userData ? (
          <UserDetailsCard
            id={details.userData.id}
            login={details.userData.login}
            avatar={details.userData.avatar_url}
            profileUrl={details.userData.html_url}
            createdAt={details.userData.created_at}
            repositories={details.repositories}
          />
        ) : null}

        {details && details.repositories ? (
          <DetailsTable tableContent={details.repositories} />
        ) : null}
      </Flex>
    </Flex>
  );
}
