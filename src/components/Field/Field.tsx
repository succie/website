import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import Mado from '../Mado/Mado';
import styled from 'styled-components';

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Field = (props: Props) => {
  const numMados = useMemo(() => props.mados.length, []);

  return (
    <div className={`Field ${props.className}`}>
      {props.mados.map(mado => (
        <Mado key={mado.id} numMados={numMados} {...mado} />
      ))}
    </div>
  );
};

const StyledField = styled(Field)`
  position: absolute;
  top: 30px;
  left: 80px;
  width: calc(100vw - 80px);
  height: calc(100vh - 30px);
  background-color: rgb(95, 79, 79);
  overflow: hidden;
`;

export default connect(mapStateToProps)(StyledField);
