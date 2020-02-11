import React from 'react';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Contact = (props: Props) => {
  return (
    <div className={`Contact ${props.className}`}>
      <div>
        <span>Your Email</span>
        <input type="email" autoComplete="email" aria-label="E-mail" />
      </div>
      <div className="Contact-message">
        <span>Message</span>
        <textarea cols={80} rows={10} aria-label="message" />
      </div>
    </div>
  );
};

const StyledContact = styled(Contact)`
  .Contact-message textarea {
    resize: none;
  }
`;

export default StyledContact;
