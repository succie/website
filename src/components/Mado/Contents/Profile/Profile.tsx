import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="Profile-item name">
        <h1>SUCCIE</h1>
      </div>
      <div className="Profile-item job">
        <h1>Front-end Developer</h1>
        <p>HTML / CSS / JavaScript / TypeScript / Node.js</p>
        <p>React / Redux / Webpack</p>
      </div>
      <div className="Profile-item career">
        <h1>Career</h1>
        <p className="career-date">2016/03 ~ 2018/09</p>
        <p className="career-description">
          ATLED / HTML, CSS, JavaScript, Node.js and AWS
        </p>
        <p className="career-date">2018/10 ~ 2019/03</p>
        <p className="career-description">
          dwango / React, Redux, almin, CSS, PHP and Smarty
        </p>
        <p className="career-date">2019/04 ~</p>
        <p className="career-description">dwango</p>
      </div>
      <div className="Profile-item hobbies">
        <h1>Hobbies</h1>
        <p>Watching Movies / Hulu, Prime Video</p>
        <p>Gaming / Dead by Daylight</p>
      </div>
    </div>
  );
};

export default Profile;
