import React from 'react';
import Head from 'next/head';
import PokemonDetailContainer from '../../../containers/DetailContainer/Detail';

const PokemonDetailPage = ({ query }) => (
  <>
    <Head>
      <title>Pokemon Collection | Detail</title>
    </Head>
    <PokemonDetailContainer name={query.name} />
  </>
);

PokemonDetailPage.getInitialProps = async ({ query }) => ({ query });

export default PokemonDetailPage;
