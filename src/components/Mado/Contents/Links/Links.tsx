import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Links.css';

const Links = () => {
  return (
    <div className="Links">
      <a className="Links-link" href="https://github.com/succie" target="_blank" rel="noopener">
        <FontAwesomeIcon icon={faGithub} size="2x" className="Links-icon" />
        GitHub
      </a>
      <a className="Links-link" href="https://twitter.com/succie319" target="_blank" rel="noopener">
        <FontAwesomeIcon icon={faTwitter} size="2x" className="Links-icon" />
        Twitter
      </a>
    </div>
  );
};

export default Links;
