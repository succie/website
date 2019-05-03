import React from "react";
import Header from "./Header/Header";
import Dock from "./Dock/Dock";
import Field from "./Field/Field";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dock />
      <Field />
    </div>
  );
};

export default App;
