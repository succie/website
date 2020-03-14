import React, { useCallback, lazy } from 'react';
import styled from 'styled-components';
import { RootState } from '../../store';
import { Mado as MadoType, madoActions } from '../../store/mado';
import { Mado } from '../Mado/Mado';
import { useSelector, useDispatch } from 'react-redux';

type Props = {
  mados: MadoType[];
  close: (id: string) => void;
  moveFront: (id: string) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ mados, close, moveFront, ...props }) => {
  return (
    <div {...props}>
      {mados.map(mado => (
        <Mado mado={mado} numMados={mados.length} close={close} moveFront={moveFront} key={mado.id}>
          {lazy(() => import(`../Mado/Contents/${props.id}/${props.id}`))}
        </Mado>
      ))}
    </div>
  );
};

const StyledComponent = styled(Component)`
  position: absolute;
  top: 30px;
  left: 80px;
  width: calc(100vw - 80px);
  height: calc(100vh - 30px);
  background-color: rgb(95, 79, 79);
  overflow: hidden;
`;

const madosSelector = (state: RootState) => state.mados;

const Container: React.FC = () => {
  const dispatch = useDispatch();
  const mados = useSelector(madosSelector);

  const close = useCallback(
    (id: string) => {
      dispatch(madoActions.closeMado(id));
    },
    [dispatch]
  );

  const moveFront = useCallback(
    (id: string) => {
      dispatch(madoActions.moveFrontMado(id));
    },
    [dispatch]
  );

  return <StyledComponent mados={mados} close={close} moveFront={moveFront} />;
};

export const Field = Container;
