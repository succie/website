import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import Mado from '../Mado/Mado';
import './Field.css';

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const Field = (props: Props) => {
  const numMados = useMemo(() => props.mados.length, []);

  return (
    <div className="Field">
      {props.mados.map(mado => (
        <Mado key={mado.id} numMados={numMados} {...mado} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Field);
