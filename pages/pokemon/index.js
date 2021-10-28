import React from 'react';
import Head from 'next/head';
import PokemonContainer from '../../containers/PokemonContainer';

const PokemonPage = () => (
  <>
    <Head>
      <title>Pokemon Collection | List</title>
    </Head>
    <PokemonContainer />
  </>
);

export default PokemonPage;
