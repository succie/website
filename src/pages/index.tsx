import React from 'react';
import styled from '@emotion/styled';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Component: React.FC<Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
