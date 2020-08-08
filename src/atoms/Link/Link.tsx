import React, { forwardRef } from 'react';
import styled from 'styled-components';

type Props = React.ComponentPropsWithoutRef<'a'> & {
  newTab?: boolean;
};

const Component = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  return (
    <a
      {...props}
      ref={ref}
      target={props.newTab ? '_blank' : undefined}
      rel={props.newTab ? 'noopener noreferrer' : undefined}
    />
  );
});

const StyledComponent = styled(Component)``;

export const Link = StyledComponent;
