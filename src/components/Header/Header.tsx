import React from 'react';
import styled from 'styled-components';
import { PullDown } from '../PullDown/PullDown';
import clsx from 'clsx';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <h1 className="title">succie.dev</h1>
      <PullDown className="menu" />
    </div>
  );
};

const StyledHeader = styled(Component)`
  position: relative;
  display: flex;
  width: 100vw;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #222222;

  .title {
    margin: 0;
    padding: 0;
    color: #fafafa;
    font-size: 18px;
    line-height: 1em;
  }

  .menu {
    position: absolute;
    right: 15px;
  }
`;

export const Header = StyledHeader;
