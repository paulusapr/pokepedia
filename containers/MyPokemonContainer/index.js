import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Router from 'next/router';
import { useStore } from '../../context/store';
import { bulbasaur } from '../../utils/assets';
import { Layout } from '../../components';

const MyPokemonContainer = () => {
  const { myPokemon } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (myPokemon) setLoading(false);
  }, [loading]);

  return (
    <Layout logo={bulbasaur} path="/pokemon/mypokemon">
      {loading ? (<CircularProgress />)
        : (
          <Grid container spacing={3} direction="row" wrap="wrap">
            {myPokemon.length <= 0 ? <di className="w-100 d-flex justify-center">{`You don\'t have pokemon...`}</di>
              : myPokemon && myPokemon.map((el, idx) => (
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
                    onClick={() => Router.push(`/pokemon/mypokemon/${el.name}`)}
                    onKeyDown={() => Router.push(`/pokemon/mypokemon/${el.name}`)}
                  >
                    <span>{el.name}</span>
                    <img src={el.image} alt="pokemon" />
                  </div>
                </Grid>
              ))}
          </Grid>
        )}
    </Layout>
  );
};

export default MyPokemonContainer;
