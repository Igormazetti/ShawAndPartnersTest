import { useState } from 'react';
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

export default function useUsersDetailsHook() {
  const [details, setDetails] = useState<UserDetails>();
  const [loading, setLoading] = useState(false);

  async function getUserDetails(username: string) {
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

  return { details, loading, getUserDetails };
}
