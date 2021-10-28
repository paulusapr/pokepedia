import {
  useState, useEffect, createContext, useContext,
} from 'react';
import { useRouter } from 'next/router';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const router = useRouter();
  const [myPokemon, setMyPokemon] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);
  const { asPath } = router;

  const getUsername = () => localStorage.getItem('username');
  const saveUsername = (name) => {
    localStorage.setItem('username', name);
  };

  const getPokemon = () => localStorage.getItem('pokemon');
  const saveMyPokemon = (pokemon) => {
    setMyPokemon(pokemon);
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
  };

  const closeGame = async () => {
    localStorage.clear();
    setUsername(null);
    setMyPokemon([]);
    await router.push('/').then(() => setLoading(false));
  };

  const startGame = async (name, asPath) => {
    const pokemon = getPokemon();
    try {
      saveUsername(name);
      setUsername(name);
      if (pokemon) setMyPokemon(JSON.parse(pokemon));
    } finally {
      await router.push(!asPath || asPath === '/' ? '/pokemon' : asPath).then(() => setLoading(false));
    }
  };

  useEffect(() => {
    const name = getUsername();
    if (!name) {
      closeGame();
    } else startGame(name, asPath);
  }, [loading, asPath]);

  return (
    <StoreContext.Provider value={{
      myPokemon,
      saveMyPokemon,
      username,
      setUsername,
      loading,
      closeGame,
      startGame,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export const ProtectRoute = ({ children }) => {
  const { loading } = useStore();

  if (loading) {
    return <div>Loading...</div>;
  }
  return children;
};
