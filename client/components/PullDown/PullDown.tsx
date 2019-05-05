import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCode } from "@fortawesome/free-solid-svg-icons";
import "./PullDown.css";

const PullDown = () => {
  const [isOpen, pullMenu] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    isOpen ? pullMenu(false) : pullMenu(true);
  }, [isOpen]);

  return (
    <div className="PullDown">
      <button
        className="PullDown-button"
        onClick={handleClick}
        aria-label="pull down"
      >
        <FontAwesomeIcon icon={faCaretDown} color="#fafafa" size="lg" />
      </button>
      {isOpen ? (
        <div className="PullDown-content">
          <div className="PullDown-item">
            <a
              href="https://github.com/succie/website"
              target="_blank"
              rel="noopener"
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

export default PullDown;
