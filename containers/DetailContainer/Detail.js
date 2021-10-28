import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStore } from '../../context/store';
import { pokemily } from '../../utils/assets';
import { Layout } from '../../components';
import ReleaseModal from './ModalRelease';

const DetailContainer = (props) => {
  const { name } = props;
  const [pokemon, setPokemon] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { myPokemon } = useStore();

  useEffect(() => {
    if (myPokemon) {
      const findPokemon = myPokemon.find((el) => el.name === name);
      setPokemon(findPokemon);
      setLoading(false);
    }
  }, [name, pokemon]);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout logo={pokemily} path="/pokemon/detail">
      {loading ? (<CircularProgress />)
        : (
          <div className="d-flex flex-column profile w-100">
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Release</Button>
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
      <ReleaseModal
        pokemon={pokemon}
        submitText="Release"
        open={open}
        onClose={() => setOpen(false)}
      />
    </Layout>
  );
};

export default DetailContainer;
