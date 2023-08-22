import { useEffect, useState } from 'react';
import { api } from 'src/api';

type Users = {
  nextPageNumber: number;
  prevPageNumber: number;
  users: { id: number; login: string; avatar_url: string }[];
};

export default function useUsersListHook() {
  const [users, setUsers] = useState<Users>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const request = await api.get('');
      setUsers(request.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleNextPage() {
    try {
      setLoading(true);
      const request = await api.get(`/${users?.nextPageNumber}`);
      setUsers(request.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!users?.users.length) {
      fetchData();
    }
  }, []);

  return { users, isLoading: loading, handleNextPage, fetchData };
}
