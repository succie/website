import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Mado } from '../../molecules/Mado/Mado';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const madosSelector = (state: RootState) => state.mados;

const Component = (props: Props) => {
  const mados = useSelector(madosSelector);

  const numMados = useMemo(() => mados.length, []);

  return (
    <div className={`Field ${props.className}`}>
      {mados.map((mado) => (
        <Mado key={mado.id} numMados={numMados} {...mado} />
      ))}
    </div>
  );
};

const StyledField = styled(Component)`
  position: absolute;
  top: 30px;
  left: 80px;
  width: calc(100vw - 80px);
  height: calc(100vh - 30px);
  background-color: rgb(95, 79, 79);
  overflow: hidden;
`;

export const Field = StyledField;
