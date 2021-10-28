import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import { Grid } from '@material-ui/core';
import { css } from '@emotion/react';

const Button = styled.button`
  color: #F7CA18;
  cursor: pointer;
  display: block;
  padding: 5% 10%;
  position: relative;
  border: 2px solid #F7CA18;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  &:hover {
      background: #F7CA18;
      color: #ffffff;
  }
`;

const StyledModal = (props) => {
  const {
    open, onClose = () => {}, onOk = () => {}, submitText, showButton = true, children,
  } = props;

  return (
    <Modal
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
      open={open}
      onClose={onClose}
    >
      <div
        css={css`
          background-color: #ffffff;
          padding: 20px;
          text-align: center;
          min-width: 25vw;
          outline: none;
          border: 3px solid #000000;
        `}
      >
        <Grid item className="d-flex w-100 h-100">
          {children}
        </Grid>
        {showButton && (
          <Grid item className="d-flex justify-end w-100 h-100">
            <Button onClick={onOk}>{submitText || 'Start'}</Button>
          </Grid>
        )}
      </div>
    </Modal>
  );
};

export default StyledModal;
