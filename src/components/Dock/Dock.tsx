import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '../../store';
import { Mado, madoActions } from '../../store/mado';
import { DockItem } from './DockItem/DockItem';

type Props = {
  mados: Mado[];
  isMobile: boolean;
  onItemClick: (id: string) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ className, mados, isMobile, onItemClick, ...props }) => {
  return (
    <div {...props} className={clsx(className, { isMobile })}>
      {mados.map(mado => (
        <DockItem
          id={mado.id}
          icon={mado.icon}
          iconPrefix={mado.iconPrefix}
          isOpen={mado.isOpen}
          isActive={mado.isActive}
          isMobile={isMobile}
          onItemClick={onItemClick}
          key={mado.id}
        />
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)`
  width: 80px;
  width: 80px;
  height: calc(100vh - 30px);
  background-color: #333333;
  padding: 0;

  &.isMobile {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    align-content: flex-start;
  }
`;

const madosSelector = (state: RootState) => state.mados;
const isMobileSelector = (state: RootState) => state.device.isMobile;

const Container: React.FC = () => {
  const dispatch = useDispatch();
  const mados = useSelector(madosSelector);
  const isMobile = useSelector(isMobileSelector);

  const onItemClick = useCallback(
    (id: string) => {
      dispatch(madoActions.openMado(id));
      dispatch(madoActions.moveFrontMado(id));
    },
    [dispatch]
  );

  return <StyledComponent mados={mados} isMobile={isMobile} onItemClick={onItemClick} />;
};

export const Dock = Container;
