import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Links = (props: Props) => {
  return (
    <div className={`Links ${props.className}`}>
      <a className="Links-link" href="https://github.com/succie" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="Links-icon" />
        GitHub
      </a>
      <a className="Links-link" href="https://twitter.com/succie319" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="Links-icon" />
        Twitter
      </a>
    </div>
  );
};

const StyledLinks = styled(Links)`
  .Links-link {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .Links-icon {
    margin-right: 6px;
  }
`;

export default StyledLinks;
