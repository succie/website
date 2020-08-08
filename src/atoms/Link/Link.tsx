import React, { forwardRef } from 'react';
import styled from 'styled-components';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  newTab?: boolean;
};

const Component = forwardRef<HTMLAnchorElement, Props>(({ newTab, ...props }, ref) => {
  return (
    <a {...props} ref={ref} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} />
  );
});

const StyledComponent = styled(Component)``;

export const Link = StyledComponent;
