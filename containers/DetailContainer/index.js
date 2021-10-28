import { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { pokemily } from '../../utils/assets';
import { Layout } from '../../components';
import CatchModal from './Modal';

const GET_POKEMONS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
      sprites {
        front_default
      }
    }
  }
`;

const DetailContainer = (props) => {
  const { name } = props;
  const [pokemon, setPokemon] = useState(null);
  const [open, setOpen] = useState(false);
  const [variable, setVariable] = useState({
    name,
  });
  const { data, loading } = useQuery(GET_POKEMONS, {
    variables: variable,
  });

  useEffect(() => {
    if (data) {
      const { pokemon } = data;
      if (pokemon) setPokemon(pokemon);
    }
  }, [name, variable, data]);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout logo={pokemily} path="/pokemon/detail">
      {loading ? (<CircularProgress />)
        : (
          <div className="d-flex flex-column profile w-100">
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)}>Catch the Pokemon</Button>
            <div className="d-flex flex-row flex-wrap w-100 border">
              <img src={pokemon?.sprites?.front_default} alt="pokemon collection" />
            </div>
            <div className="d-flex flex-row flex-wrap w-100">
              <div className="border padding-2 w-50">Name</div>
              <div className="border padding-2 w-50">{pokemon?.name}</div>
            </div>
            <div className="d-flex flex-row flex-wrap w-100">
              <div className="border padding-2 w-50">Types</div>
              <div className="border padding-2 w-50">
                <ul>
                  {pokemon?.types && pokemon.types.map((el) => (
                    <li key={`${pokemon?.name}-${el.type.name}`}>{el.type.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="d-flex flex-row flex-wrap w-100">
              <div className="border padding-2 w-50">Abilities</div>
              <div className="border padding-2 w-50">
                <ul>
                  {pokemon?.abilities && pokemon.abilities.map((el) => (
                    <li key={`${pokemon?.name}-${el.ability.name}`}>{el.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      <CatchModal
        pokemon={pokemon}
        submitText="Save to Collection"
        open={open}
        onClose={() => setOpen(false)}
      />
    </Layout>
  );
};

export default DetailContainer;
