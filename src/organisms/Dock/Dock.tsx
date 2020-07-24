import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '../../store';
import { DockItem } from '../../molecules/DockItem/DockItem';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const madosSelector = (state: RootState) => state.mados;
const isMobileSelector = (state: RootState) => state.device.isMobile;

const Component = (props: Props) => {
  const mados = useSelector(madosSelector);
  const isMobile = useSelector(isMobileSelector);

  const cns = clsx('Dock', props.className, { 'is-mobile': isMobile });

  return (
    <div className={cns}>
      {mados.map((mado) => (
        <DockItem
          key={mado.id}
          id={mado.id}
          icon={mado.icon}
          iconPrefix={mado.iconPrefix}
          isOpen={mado.isOpen}
          isActive={mado.isActive}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

const StyledDock = styled(Component)`
  width: 80px;
  width: 80px;
  height: calc(100vh - 30px);
  background-color: #333333;
  padding: 0;

  &.is-mobile {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    align-content: flex-start;
  }
`;

export const Dock = StyledDock;
