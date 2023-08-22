import { useState, useEffect } from 'react';
import { api } from 'src/api';

export type UserData = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  created_at: string;
};

export type UserRepositoriesData = {
  id: number;
  name: string;
  url: string;
};

type UserDetails = {
  repositories: UserRepositoriesData[];
  userData: UserData;
};

export default function useUsersDetailsHook(username: string) {
  const [details, setDetails] = useState<UserDetails>();
  const [loading, setLoading] = useState(false);

  async function getUserDetails() {
    try {
      setLoading(true);
      const request = await api.get(`/details/${username}`);

      setDetails(request.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return { details, loading };
}
