import React from 'react';
import Head from 'next/head';
import MyPokemonContainer from '../../../containers/MyPokemonContainer';

const MyPokemonPage = () => (
  <>
    <Head>
      <title>Pokemon Collection | My Pokemon</title>
    </Head>
    <MyPokemonContainer />
  </>
);

export default MyPokemonPage;
