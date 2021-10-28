import Router from 'next/router';
import { Divider } from '@material-ui/core';
import { css } from '@emotion/react';

const defaultBgColor = '#f3dc7f';
const defaultTextColor = '#e45932';
const defaultHoverColor = '#ffffff';
const defaultBgActiveColor = '#e45932';
const defaultActiveColor = '#ffffff';

const MenuBar = (props) => {
  const {
    path,
    bgColor = defaultBgColor, textColor = defaultTextColor,
    hoverColor = defaultHoverColor, activeColor = defaultActiveColor,
    bgActiveColor = defaultBgActiveColor,
  } = props;

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow: auto;
        background-color: ${bgColor};
        color: ${textColor};
        border-radius: 4px;
      `}
    >
      <div
        css={css`
        padding: 20px;
        cursor: pointer;
        &:hover {
          color: ${hoverColor};
        }
        &.active {
          color: ${activeColor};
          background: ${bgActiveColor};
          border: 1px solid ${textColor};
        }
        `}
        className={path === '/pokemon' && 'active'}
        onClick={() => Router.push('/pokemon')}
        onKeyDown={() => Router.push('/pokemon')}
        role="button"
        tabIndex={0}
      >
        Pokemon
      </div>
      <Divider orientation="vertical" flexItem />
      <div
        css={css`
        padding: 20px;
        cursor: pointer;
        &:hover {
          color: ${hoverColor};
        }
        &.active {
          color: ${activeColor};
          background: ${bgActiveColor};
          border: 1px solid ${textColor};
        }
        `}
        className={path === '/pokemon/mypokemon' && 'active'}
        onClick={() => Router.push('/pokemon/mypokemon')}
        onKeyDown={() => Router.push('/pokemon/mypokemon')}
        role="button"
        tabIndex={0}
      >
        My Pokemon
      </div>
      <Divider orientation="vertical" flexItem />
      <div
        css={css`
        padding: 20px;
        cursor: pointer;
        &:hover {
          color: ${hoverColor};
        }
        &.active {
          color: ${activeColor};
          background: ${bgActiveColor};
          border: 1px solid ${textColor};
        }
        `}
        className={path === '/pokemon/profile' && 'active'}
        onClick={() => Router.push('/pokemon/profile')}
        onKeyDown={() => Router.push('/pokemon/profile')}
        role="button"
        tabIndex={0}
      >
        Profile
      </div>
    </div>
  );
};

export default MenuBar;
