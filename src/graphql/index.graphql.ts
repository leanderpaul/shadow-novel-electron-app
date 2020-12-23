/**
 * Importing npm packages.
 */
import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { message } from 'antd';

/**
 * Importing user defined packages.
 */
import { getToken } from '../utils/auth.util';
import { ServerDocument, VolumeForm } from '../typescript/graphql.types';

/**
 * Declaring the variables.
 */
let serverConnected = true;
const key = 'network-status';

/**
 * Setting the auth reactive variable.
 */
export const graphqlState = makeVar<{ uri: string; connected: boolean }>({ uri: 'http://localhost:8080/graphql', connected: true });
export const authState = makeVar<{ username: string | null }>({ username: null });
export const serverState = makeVar<'online' | 'offline'>('offline');
export const volumeFormState = makeVar<Omit<VolumeForm, '__typename'>>({ open: false, vid: null, name: null });

/**
 * Creating the cache object.
 */
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        authenticated: {
          read() {
            return authState().username ? true : false;
          }
        },
        volumeForm: {
          read() {
            return volumeFormState();
          }
        }
      }
    },
    NovelPagination: {
      fields: {
        hasNext: {
          read(_, { readField }) {
            const totalCount = readField('totalCount') as number;
            const offset = readField('offset') as number;
            const limit = readField('limit') as number;
            return offset + limit < totalCount;
          }
        },
        hasPrev: {
          read(_, { readField }) {
            const offset = readField('offset') as number;
            return offset > 0;
          }
        }
      }
    },
    Novel: {
      keyFields: ['nid']
    },
    Volume: {
      keyFields: ['vid']
    },
    Chapter: {
      keyFields: ['cid']
    }
  }
});

/**
 * Exporting the apollo client constant.
 */
export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: cache,
  headers: { authorization: getToken() || '' }
});

/**
 * Function to keep checking the status of the server.
 */
async function checkNetworkStatus() {
  const graphqlStatus = graphqlState();
  if (!graphqlStatus.connected) return;
  const serverStatus = serverState();
  try {
    await client.query({ query: ServerDocument, fetchPolicy: 'network-only' });
    if (serverConnected === false) message.success({ content: 'Server reconnected !', key, duration: 2 });
    if (serverStatus === 'offline') serverState('online');
    serverConnected = true;
    setTimeout(checkNetworkStatus, 10000);
  } catch (err) {
    if (serverConnected === true) message.error({ content: 'Server disconnected ! Please check the server status.', key, duration: 0 });
    if (serverStatus === 'online') serverState('offline');
    serverConnected = false;
    setTimeout(checkNetworkStatus, 1000);
  }
}

checkNetworkStatus();
