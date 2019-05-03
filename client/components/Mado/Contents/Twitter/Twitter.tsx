import React from "react";
import { Timeline } from "react-twitter-widgets";

const Twitter = () => {
  return (
    <Timeline
      dataSource={{ sourceType: "profile", screenName: "succie319" }}
      options={{ theme: "dark" }}
    />
  );
};

export default Twitter;
