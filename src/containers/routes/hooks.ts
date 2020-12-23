import { message } from 'antd';

import { useAuthQuery, useUserQuery } from '../../typescript/graphql.types';
import { setToken, getToken } from '../../utils/auth.util';
import { authState } from '../../graphql/index.graphql';

function handleUser(username: string, token: string) {
  authState({ username });
  setToken(token);
  message.success('User verified succesfully !');
}

export function useAuth() {
  const { data } = useAuthQuery();
  const { loading } = useUserQuery({
    onCompleted: (data) => {
      const result = data.user!;
      if (result.__typename === 'User') handleUser(result.username, result.token);
      else message.error(result.message);
    },
    skip: getToken() === null
  });
  return { loading, authenticated: data?.authenticated || false };
}
