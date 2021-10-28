import { useStore } from '../../context/store';
import { eevee } from '../../utils/assets';
import { Layout } from '../../components';

const ProfileContainer = () => {
  const { username, myPokemon } = useStore();

  return (
    <Layout logo={eevee} path="/pokemon/profile">
      <div className="d-flex flex-column profile w-100">
        <div className="d-flex flex-row flex-wrap w-100">
          <div className="border padding-2 w-50">Trainer</div>
          <div className="border padding-2 w-50">{username}</div>
        </div>
        <div className="d-flex flex-row flex-wrap w-100">
          <div className="border padding-2 w-50">Pokemon</div>
          <div className="border padding-2 w-50">{myPokemon.length}</div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileContainer;
