import React, { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCode, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Component: React.FC<Props> = ({ ...props }) => {
  const [isOpen, pullMenu] = useState(false);

  const onClick = useCallback(() => {
    pullMenu(isOpen => !isOpen);
  }, []);

  return (
    <div {...props}>
      <button className="button" onClick={onClick} aria-label="pull down">
        {isOpen ? (
          <FontAwesomeIcon icon={faCaretUp} color="#fafafa" size="lg" />
        ) : (
          <FontAwesomeIcon icon={faCaretDown} color="#fafafa" size="lg" />
        )}
      </button>
      {isOpen ? (
        <div className="content">
          <div className="item">
            <a href="https://github.com/succie/website" target="_blank" rel="noopener" aria-label="source code">
              <FontAwesomeIcon icon={faCode} color="#fafafa" />
              Source Code
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const StyledComponent = styled(Component)`
  position: relative;

  .button {
    display: block;
    width: 20px;
    height: 20px;
  }

  .content {
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

  .content::before {
    content: '';
    position: absolute;
    width: 0px;
    height: 0px;
    top: -30px;
    right: 10px;
    border: 15px solid transparent;
    border-bottom: 15px solid #afafaf;
    pointer-events: none;
  }

  .content::after {
    content: '';
    position: absolute;
    width: 0px;
    right: 12px;
    height: 0px;
    top: -26px;
    border: 13px solid transparent;
    border-bottom: 13px solid #212121;
    pointer-events: none;
  }

  .item {
    color: #fafafa;
  }

  .item a {
    display: flex;
    align-items: center;
  }

  .item svg {
    margin-right: 10px;
  }
`;

export const PullDown = StyledComponent;
