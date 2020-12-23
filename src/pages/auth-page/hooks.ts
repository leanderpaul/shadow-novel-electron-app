import { message } from 'antd';

import { authState } from '../../graphql/index.graphql';
import { useLoginMutation, useRegisterMutation, useAuthQuery } from '../../typescript/graphql.types';
import { setToken } from '../../utils/auth.util';

function handleUser(username: string, token: string) {
  authState({ username });
  setToken(token);
}

export function useLogin() {
  const [loginUser, { loading }] = useLoginMutation({
    onCompleted: (data) => {
      const result = data.login!;
      if (result.__typename === 'User') handleUser(result.username, result.token);
      else message.error(result.message);
    }
  });
  return { loading, login: (username: string, password: string) => loginUser({ variables: { username, password } }) };
}

export function useRegister() {
  const [loginUser, { loading }] = useRegisterMutation({
    onCompleted: (data) => {
      const result = data.register!;
      if (result.__typename === 'User') handleUser(result.username, result.token);
      else message.error(result.message);
    }
  });
  return { loading, register: (username: string, password: string) => loginUser({ variables: { username, password } }) };
}

export function useAuth() {
  const { data } = useAuthQuery();
  return data!;
}
