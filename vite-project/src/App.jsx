import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <NavBar />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
