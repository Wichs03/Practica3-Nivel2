import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ButtonWhite, { ButtonColor } from "./components/Buttons";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
    </>
  );
}

export default App;
