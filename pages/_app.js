import Head from 'next/head';
import PropTypes from 'prop-types';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { StoreProvider, ProtectRoute } from '../context/store';
import { getEnv } from '../services';
import '../styles/_app.scss';

const client = new ApolloClient({
  uri: getEnv('API_BASE_URL'),
  cache: new InMemoryCache(),
});

const Pokepedia = (props) => {
  const { Component, pageProps } = props;

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Pokepedia</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StoreProvider>
        <ProtectRoute>
          <Component {...pageProps} />
        </ProtectRoute>
      </StoreProvider>
    </ApolloProvider>
  );
};

Pokepedia.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Pokepedia;
