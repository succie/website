import React from 'react';
import { connect } from 'react-redux';
import Dock from '../../Dock/Dock';
import Mado from '../../Mado/Mado';
import { RootState } from '../../../store';

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const Home = (props: Props) => {
  return (
    <div className="Home">
      <Dock />
      {props.mados.map(mado => (
        <Mado key={mado.id} {...mado} numMados={1} isMobile={true} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Home);
