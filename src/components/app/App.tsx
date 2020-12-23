/**
 * Importing npm packages.
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

/**
 * Importing npm design components.
 */

/**
 * Importing user defined components.
 */
import Navbar from '../../containers/navbar/Navbar';
import Routes from '../../containers/routes/Routes';

/**
 *  Importing user defined modules.
 */
import { client } from '../../graphql/index.graphql';

/**
 * Importing styled components.
 */
import { Content, Layout } from './styles';

/**
 * Importing types.
 */

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Content>
            <Routes />
          </Content>
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
