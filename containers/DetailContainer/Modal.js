import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { css } from '@emotion/react';
import Text from '@material-ui/core/Typography';
import Router from 'next/router';
import { Modal } from '../../components';
import { useStore } from '../../context/store';
import { pokeball, runaway, gotcha } from '../../utils/assets';

const CatchModal = (props) => {
  const { open, pokemon } = props;
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Name already exist.');

  const { myPokemon, saveMyPokemon } = useStore();

  const onSave = () => {
    const collection = myPokemon;
    if (!name || name === '') {
      setError(true);
      setErrorMessage('You must give your pokemon a nickname!');
      return;
    } if (collection.find((el) => el.name === name)) {
      setError(true);
      setErrorMessage('Name already exist.');
      return;
    }
    collection.push({ ...pokemon, ...{ image: pokemon?.sprites?.front_default, name } });
    saveMyPokemon(collection);
    Router.push('/pokemon/mypokemon');
  };

  const generateBoolean = () => {
    const bool = Math.random([0, 1]) < 0.5;
    setIsSuccess(bool);
    setLoading(false);
  };

  useEffect(() => {
    if (open && loading) setTimeout(() => generateBoolean(), 3000);
    if (!open) {
      setLoading(true);
      setError(false);
    }
  }, [open, loading]);

  useEffect(() => {
    if (pokemon?.name) setName(pokemon?.name);
  }, [pokemon]);

  return (
    <Modal onOk={onSave} showButton={!loading && isSuccess} {...props}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          input {
            padding: 6px 7px;
          }
      `}
        className="margin-bottom-4 w-100"
      >
        {loading && (<img src={pokeball} alt="Loading..." />)}
        {!loading && !isSuccess && (
          <>
            <img src={runaway} alt="Loading..." />
            <Text variant="h6">Pokemon run away!</Text>
          </>
        )}
        {!loading && isSuccess && (
          <>
            <img src={gotcha} alt="Loading..." />
            <Text variant="h6">Yeay, you got a new pokemon!</Text>
            <TextField
              value={name}
              variant="outlined"
              placeholder="Enter Pokemon Name"
              onChange={(e) => setName(e.target.value)}
            />
            {error && (
              <span
                css={css`
                  color: #b00020;
             `}
                className="margin-top-2"
              >
                {errorMessage || ''}
              </span>
            )}
          </>
        )}
      </div>
    </Modal>
  );
};

export default CatchModal;
