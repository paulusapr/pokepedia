import Text from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Router from 'next/router';
import { pikachu } from '../../utils/assets';
import { MenuBar } from '..';
import { useStore } from '../../context/store';

const Layout = (props) => {
  const { logo, path = '/', children } = props;
  const { username, closeGame } = useStore();

  return (
    <div className="main-container">
      <div className="user-info">
        <Text variant="body1" className="d-flex align-center pointer" onClick={() => Router.push('/pokemon/profile')}>
          <PersonIcon />
          {' '}
          {username}
        </Text>
        <Divider className="divider" orientation="vertical" flexItem />
        <Text variant="body1" className="d-flex align-center pointer" onClick={closeGame}>
          <ExitToAppIcon />
          {' '}
          Quit Game
        </Text>
      </div>
      <div className="logo margin-bottom-4">
        <img src={logo || pikachu} alt="icon pokemon" />
      </div>
      <MenuBar bgColor="#f3dc7f" textColor="#e45932" path={path} />
      <div className="content margin-top-4 padding-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
