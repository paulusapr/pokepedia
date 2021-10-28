import Text from '@material-ui/core/Typography';
import Router from 'next/router';
import { Modal } from '../../components';
import { useStore } from '../../context/store';

const ReleaseModal = (props) => {
  const { pokemon } = props;
  const { myPokemon, saveMyPokemon } = useStore();

  const onRelease = () => {
    const collection = myPokemon;
    saveMyPokemon(collection.filter((el) => el.name !== pokemon?.name));
    Router.push('/pokemon/mypokemon');
  };

  return (
    <Modal onOk={onRelease} {...props}>
      <Text variant="h6">{`Are your sure want to release ${pokemon?.name}?`}</Text>
    </Modal>
  );
};

export default ReleaseModal;
