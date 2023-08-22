'use client';
import React from 'react';
import { Button, Center, Flex, Spinner } from '@chakra-ui/react';
import { VscGithub } from 'react-icons/vsc';
import UserCard from 'src/components/UserCard';
import useUsersListHook from 'src/hooks/usersListHook';

export default function page() {
  const { users, isLoading, handleNextPage, fetchData } = useUsersListHook();

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
        <VscGithub size={40} />
        Github Users List
      </Flex>
      {isLoading ? (
        <Center h="70vh">
          <Spinner color="#FFF" size="xl" />
        </Center>
      ) : (
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
        >
          {!!users?.users
            ? users.users.map((user) => (
                <UserCard
                  key={user.id}
                  id={user.id}
                  login={user.login}
                  avatar={user.avatar_url}
                />
              ))
            : null}

          <Flex gap="30px" justifyContent="center" alignItems="center">
            <Button
              w="100px"
              onClick={fetchData}
              _hover={{
                opacity: '0.8',
                cursor: 'pointer',
              }}
              disabled={users?.prevPageNumber === 1}
              _focus={{
                boxShadow: 'none',
              }}
            >
              First page
            </Button>

            <Button
              w="100px"
              onClick={handleNextPage}
              _hover={{ opacity: '0.8' }}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
