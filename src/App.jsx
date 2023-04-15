import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;