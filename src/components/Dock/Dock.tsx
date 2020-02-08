import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { RootState } from '../../store';
import DockItem from '../DockItem/DockItem';
import './Dock.css';

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados,
    device: state.device
  };
};

type Props = ReturnType<typeof mapStateToProps>;

const Dock = (props: Props) => {
  const cns = useMemo(() => classnames('Dock', { 'is-mobile': props.device.isMobile }), [props.device.isMobile]);

  return (
    <div className={cns}>
      {props.mados.map(mado => (
        <DockItem
          key={mado.id}
          id={mado.id}
          icon={mado.icon}
          iconPrefix={mado.iconPrefix}
          isOpen={mado.isOpen}
          isActive={mado.isActive}
          isMobile={props.device.isMobile}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(Dock);
