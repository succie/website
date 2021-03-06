import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Profile = (props: Props) => {
  return (
    <div className={`Profile ${props.className}`}>
      <div className="Profile-item name">
        <h1>succie</h1>
      </div>
      <div className="Profile-item job">
        <h1>Front-end Developer</h1>
        <p>HTML / CSS / JavaScript / TypeScript / Node.js</p>
        <p>React / Redux / Webpack</p>
      </div>
      <div className="Profile-item hobbies">
        <h1>Hobbies</h1>
        <p>Watching Movies / Netflix, Prime Video, D anime, Disney +, Hulu</p>
        <p>Gaming / Apex Legends, Dead by Daylight</p>
      </div>
    </div>
  );
};

const StyledProfile = styled(Profile)`
  .Profile-item {
    margin-bottom: 16px;
  }

  .Profile-item.name h1 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
  }

  .Profile-item.name h1::before {
    content: '';
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-color: #fff;
    border-radius: 50%;
    padding: 8px;
    background-image: url(${logo});
    background-origin: content-box;
    background-repeat: no-repeat;
    margin-right: 30px;
  }

  .Profile-item.career .career-description {
    text-indent: 1em;
  }
`;

export default StyledProfile;
