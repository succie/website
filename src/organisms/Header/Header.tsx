import React from 'react';
import PullDown from '../../molecules/PullDown/PullDown';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Header = (props: Props) => {
  return (
    <div className={`Header ${props.className}`}>
      <div className="Header-item center">
        <h1>succie.dev</h1>
      </div>
      <div className="Header-item right">
        <PullDown />
      </div>
    </div>
  );
};

const StyledHeader = styled(Header)`
  width: 100vw;
  height: 30px;
  background: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .Header-item.center h1 {
    font-size: 1.2rem;
    color: #fafafa;
  }

  .Header-item.right {
    position: absolute;
    right: 15px;
  }
`;

export default StyledHeader;
