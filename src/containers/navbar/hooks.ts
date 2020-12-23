import { message } from 'antd';

import { useAuthQuery } from '../../typescript/graphql.types';
import { removeToken } from '../../utils/auth.util';
import { authState } from '../../graphql/index.graphql';

export function useAuth() {
  const { data, client } = useAuthQuery();

  function logout() {
    removeToken();
    client.resetStore();
    authState({ username: null });
    message.success('User logged out successfully !');
  }

  return { logout, ...data! };
}

export function logout() {}
