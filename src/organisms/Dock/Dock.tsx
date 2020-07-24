import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { RootState } from '../../store';
import DockItem from '../../molecules/DockItem/DockItem';
import styled from 'styled-components';

const mapStateToProps = (state: RootState) => {
  return {
    mados: state.mados,
    device: state.device
  };
};

type Props = ReturnType<typeof mapStateToProps> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Dock = (props: Props) => {
  const cns = clsx('Dock', props.className, { 'is-mobile': props.device.isMobile });

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

const StyledDock = styled(Dock)`
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

export default connect(mapStateToProps)(StyledDock);
