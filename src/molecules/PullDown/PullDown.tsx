import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCode, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const PullDown = (props: Props) => {
  const [isOpen, pullMenu] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    isOpen ? pullMenu(false) : pullMenu(true);
  }, [isOpen]);

  return (
    <div className={`PullDown ${props.className}`}>
      <button className="PullDown-button" onClick={handleClick} aria-label="pull down">
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} color="#fafafa" size="lg" />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} color="#fafafa" size="lg" />
        )}
      </button>
      {isOpen ? (
        <div className="PullDown-content">
          <div className="PullDown-item">
            <a
              href="https://github.com/succie/website"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="source code"
            >
              <FontAwesomeIcon icon={faCode} color="#fafafa" />
              Source Code
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const StyledPullDown = styled(PullDown)`
  position: relative;

  .PullDown-button {
    width: 20px;
    height: 20px;
  }

  .PullDown-content {
    position: absolute;
    top: 40px;
    right: 0;
    display: flex;
    align-items: center;
    width: 218px;
    height: 112px;
    border: 1px solid #afafaf;
    border-radius: 4px;
    background-color: #212121;
    z-index: 9999;
    padding: 5px 8px;
    box-sizing: border-box;
  }

  .PullDown-content::before {
    pointer-events: none;
    content: '';
    position: absolute;
    top: -30px;
    right: 10px;
    width: 0px;
    height: 0px;
    border: 15px solid transparent;
    border-bottom: 15px solid #afafaf;
  }

  .PullDown-content::after {
    pointer-events: none;
    content: '';
    position: absolute;
    top: -26px;
    right: 12px;
    width: 0px;
    height: 0px;
    border: 13px solid transparent;
    border-bottom: 13px solid #212121;
  }

  .PullDown-item {
    color: #fafafa;
  }

  .PullDown-item a {
    display: flex;
    align-items: center;
  }

  .PullDown-item svg {
    margin-right: 10px;
  }
`;

export default StyledPullDown;
