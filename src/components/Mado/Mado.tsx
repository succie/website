import React, { useMemo, useCallback, Suspense } from 'react';
import Draggable from 'react-draggable';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Mado as MadoType } from '../../store/mado';
import styled from 'styled-components';

type Props = {
  mado: MadoType;
  numMados: number;
  isMobile?: boolean;
  close: (id: string) => void;
  moveFront: (id: string) => void;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({
  className,
  mado,
  numMados,
  isMobile = false,
  close,
  moveFront,
  children,
  ...props
}) => {
  const onClose = useCallback(() => {
    close(mado.id);
  }, [mado, close]);

  const onMoveFront = useCallback(() => {
    moveFront(mado.id);
  }, [mado, moveFront]);

  return mado.isOpen ? (
    <Draggable
      handle=".Mado-header"
      defaultPosition={{
        x: (mado.zIndex % (numMados + 1)) * 10,
        y: (mado.zIndex % (numMados + 1)) * 10
      }}
    >
      <div
        className={clsx(className, { isActive: mado.isActive, isMobile })}
        onMouseDownCapture={onMoveFront}
        style={{ zIndex: mado.zIndex }}
      >
        <div className="Mado-header">
          <span className="Mado-header-title">{props.id}</span>
          <button className="Mado-header-close" onClick={onClose} aria-label="close">
            <FontAwesomeIcon icon={faTimes} color="#fafafa" />
          </button>
        </div>
        <div className="Mado-content">
          <Suspense fallback={<FontAwesomeIcon icon={faSpinner} spin />}>{children}</Suspense>
        </div>
      </div>
    </Draggable>
  ) : null;
};

const StyledComponent = styled(Component)`
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

export const Mado = StyledComponent;
