import { useState, useEffect } from 'react';
import { api } from 'src/api';

type UserData = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  created_at: string;
};

type UserDetails = {
  repositories: any[];
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
