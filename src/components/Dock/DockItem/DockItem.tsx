import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';

type Props = {
  id: string;
  icon: IconName;
  iconPrefix?: IconPrefix;
  isOpen: boolean;
  isActive: boolean;
  isMobile: boolean;
  onItemClick: (id: string) => void;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Component: React.FC<Props> = ({
  className,
  id,
  icon,
  iconPrefix,
  isOpen,
  isActive,
  isMobile,
  onItemClick,
  ...props
}) => {
  const onClick = useCallback(() => {
    onItemClick(id);
  }, [id, onItemClick]);
  return (
    <button
      {...props}
      className={clsx(className, { isOpen, isActive, isMobile })}
      onClick={onClick}
      data-title={id}
      aria-label={`open ${id}`}
    >
      <FontAwesomeIcon icon={[iconPrefix || 'fas', icon]} size="4x" color="#fafafa" />
    </button>
  );
};

const StyledComponent = styled(Component)`
  position: relative;
  width: 74px;
  height: 74px;
  margin: 3px 3px 0 3px;
  border-radius: 4px;

  &:hover {
    background-color: #757575;
  }

  &.isActive {
    background-color: #616161;
  }

  &.isOpen::before {
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

  &:hover::after {
    content: attr(data-title);
    position: absolute;
    top: 50%;
    margin-left: 5px;
    padding: 3px 12px;
    color: #fafafa;
    border: 1px solid #616161;
    background-color: #212121;
    border-radius: 4px;
    transform: translateY(-50%);
    z-index: 1000;
  }

  &.isMobile {
    display: flex;
    width: 25%;
    justify-content: center;
    margin-bottom: 40px;

    &::before {
      content: none;
    }

    &::after {
      content: attr(data-title);
      position: absolute;
      top: 74px;
      color: #fafafa;
    }
  }
`;

export const DockItem = StyledComponent;
