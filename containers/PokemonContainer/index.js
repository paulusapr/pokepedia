import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Router from 'next/router';
import { css } from '@emotion/react';
import { charmander } from '../../utils/assets';
import { Layout } from '../../components';
import { useStore } from '../../context/store';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

const PokemonContainer = () => {
  const [list, setList] = useState(null);
  const [variable, setVariable] = useState({
    limit: 25,
    offset: 1,
  });
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: variable,
  });
  const { myPokemon } = useStore();

  useEffect(() => {
    if (data) {
      const { pokemons } = data;
      if (pokemons && pokemons.results) setList(pokemons.results);
    }
  }, [data, variable]);

  return (
    <Layout logo={charmander} path="/pokemon">
      {loading ? (<CircularProgress />)
        : (
          <Grid container spacing={3} direction="row" wrap="wrap">
            {list && list.map((el, idx) => (
              <Grid
                key={idx}
                xs={12}
                sm={4}
                md={4}
                lg={2}
                className="padding-2"
                item
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="card-pokemon pointer"
                  onClick={() => Router.push(`/pokemon/${el.name}`)}
                  onKeyDown={() => Router.push(`/pokemon/${el.name}`)}
                >
                  <div className="d-flex flex-row flex-wrap justify-between">
                    <span>{el.name}</span>
                    <span
                      css={css`
                        color: #e45932;
                      `}
                    >
                      (
                      {myPokemon.filter((key) => key.id === el.id).length || 0}
                      )
                    </span>
                  </div>
                  <img src={el.image} alt="pokemon" />
                </div>
              </Grid>
            ))}
          </Grid>
        )}
    </Layout>
  );
};

export default PokemonContainer;
