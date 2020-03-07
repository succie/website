import React, { useMemo, useCallback, ReactNode, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { madoActions, Mado as MadoType } from '../../store/mado';
import styled from 'styled-components';

const mapDispatchToProps = (dispatch: any) => {
  return {
    close: (id: string) => dispatch(madoActions.closeMado(id)),
    moveFront: (id: string) => dispatch(madoActions.moveFrontMado(id))
  };
};

type ExternalProps = {
  numMados: number;
  isMobile?: boolean;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  ExternalProps &
  MadoType &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Mado = (props: Props) => {
  if (!props.isOpen) return null;

  const Content = lazy(() => import(`./Contents/${props.id}/${props.id}`));

  const cns = useMemo(
    () => clsx('Mado', props.className, { 'is-active': props.isActive }, { 'is-mobile': props.isMobile }),
    [props.isActive, props.isMobile]
  );

  const closeMado = useCallback(() => {
    props.close(props.id);
  }, []);

  const moveFrontMado = useCallback(() => {
    props.moveFront(props.id);
  }, []);

  return (
    <Draggable
      handle=".Mado-header"
      defaultPosition={{
        x: (props.zIndex % (props.numMados + 1)) * 10,
        y: (props.zIndex % (props.numMados + 1)) * 10
      }}
    >
      <div className={cns} onMouseDownCapture={moveFrontMado} style={{ zIndex: props.zIndex }}>
        <div className="Mado-header">
          <span className="Mado-header-title">{props.id}</span>
          <button className="Mado-header-close" onClick={closeMado} aria-label="close">
            <FontAwesomeIcon icon={faTimes} color="#fafafa" />
          </button>
        </div>
        <div className="Mado-content">
          {useMemo(
            () => (
              <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spin />}>
                <Content />
              </Suspense>
            ),
            []
          )}
        </div>
      </div>
    </Draggable>
  );
};

const StyledMado = styled(Mado)`
  position: absolute;
  width: 640px;
  height: 360px;
  color: #f5f5f5;
  background-color: #424242;
  border-radius: 7px 7px 0 0;
  box-shadow: 0px 4px 11px -1px rgba(0, 0, 0, 0.8);

  :not(.is-active) {
    background-color: #757575;
    transition: background-color 0.2s linear;
  }

  .react-draggable-dragging .Mado-header {
    cursor: grabbing;
  }

  .Mado-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #757575;
    color: #fafafa;
    border-radius: 7px 7px 0 0;
    cursor: grab;
  }

  :not(.is-active) .Mado-header {
    color: #e0e0e0;
    transition: background-color 0.2s linear;
  }

  .Mado-header .Mado-header-close {
    position: absolute;
    right: 8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #dd4814;
  }

  :not(.is-active) .Mado-header .Mado-header-close {
    background-color: transparent;
  }

  .Mado-content {
    height: 310px;
    padding: 5px 10px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  &.is-mobile {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(0, 0) !important;
    box-shadow: none;
    border-radius: 0;
  }

  &.is-mobile .Mado-header {
    border-radius: 0;
  }

  &.is-mobile .Mado-content {
    height: calc(100% - 50px);
  }
`;

export default connect(null, mapDispatchToProps)(StyledMado);
