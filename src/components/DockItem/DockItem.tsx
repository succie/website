import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { madoActions } from '../../store/mado';
import styled from 'styled-components';

type ExternalProps = {
  id: string;
  icon: string;
  iconPrefix?: string;
  isOpen: boolean;
  isActive: boolean;
  isMobile: boolean;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  ExternalProps &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const mapDispatchToProps = (dispatch: any) => {
  return {
    open: (id: string) => dispatch(madoActions.openMado(id)),
    moveFront: (id: string) => dispatch(madoActions.moveFrontMado(id))
  };
};

const DockItem = (props: Props) => {
  const cns = useMemo(
    () =>
      classnames('DockItem', props.className, {
        'is-open': props.isOpen,
        'is-active': props.isActive,
        'is-mobile': props.isMobile
      }),
    [props.isOpen, props.isActive]
  );

  const open = useCallback((id: string) => {
    props.open(id);
    props.moveFront(id);
  }, []);

  return (
    <div className={cns} data-title={props.id}>
      <button className="DockItem-button" onClick={() => open(props.id)} aria-label={`dock item ${props.id}`}>
        <FontAwesomeIcon
          icon={[(props.iconPrefix || 'fas') as IconPrefix, props.icon as IconName]}
          size="4x"
          color="#fafafa"
        />
      </button>
    </div>
  );
};

const StyledDockItem = styled(DockItem)`
  position: relative;

  :not(.is-mobile).is-open::before {
    content: '';
    background-color: #dd4814;
    width: 7px;
    height: 7px;
    z-index: 100;
    position: absolute;
    left: 4px;
    top: 50%;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  :not(.is-mobile):hover::after {
    content: attr(data-title);
    position: absolute;
    z-index: 1000;
    background-color: #212121;
    padding: 3px 12px;
    color: #fafafa;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5px;
    border: 1px solid #616161;
    border-radius: 4px;
  }

  .DockItem-button {
    width: 74px;
    height: 74px;
    margin: 3px 3px 0 3px;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }

  :not(.is-mobile).DockItem-button:hover {
    background-color: #757575;
  }

  :not(.is-mobile).is-open.is-active .DockItem-button {
    background-color: #616161;
  }

  &.is-mobile {
    width: 25%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  &.is-mobile::before {
    content: none;
  }

  &.is-mobile::after {
    content: attr(data-title);
    position: absolute;
    top: 74px;
    color: #fafafa;
  }
`;

export default connect(null, mapDispatchToProps)(StyledDockItem);
