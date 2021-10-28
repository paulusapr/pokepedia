import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { css } from '@emotion/react';
import Text from '@material-ui/core/Typography';
import { Modal } from '../../components';
import { useStore } from '../../context/store';

const StartModal = (props) => {
  const { open } = props;
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const { startGame } = useStore();

  const onStart = () => {
    if (name !== '') {
      startGame(name);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (!open) setError(false);
  }, [open]);

  return (
    <Modal onOk={onStart} {...props}>
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
        <Text variant="body1">Your Name ?</Text>
        <TextField variant="outlined" onChange={(e) => setName(e.target.value)} />
        {error && (
          <span
            css={css`
            color: #b00020;
          `}
            className="margin-top-2"
          >
            Name required!
          </span>
        )}
      </div>
    </Modal>
  );
};

export default StartModal;
