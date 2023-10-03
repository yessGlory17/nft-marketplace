import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Explore from "./pages/Explore";

//dapp
import { DAppProvider } from "@usedapp/core";
import NFTDetail from "./pages/NFTDetail";
import Signup from "./LoginOut/Signup";
import Login from "./LoginOut/Login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <DAppProvider config={{}}>
            <Signup />
          </DAppProvider>
        }
      />
      <Route
        path="/login"
        element={
          <DAppProvider config={{}}>
            <Login />
          </DAppProvider>
        }
      />
      <Route
        path="/home"
        element={
          <DAppProvider config={{}}>
            <Home />
          </DAppProvider>
        }
      />
      <Route
        path="/create"
        element={
          <DAppProvider>
            <Create />
          </DAppProvider>
        }
      />
      <Route
        path="/explore"
        element={
          <DAppProvider config={{}}>
            <Explore />
          </DAppProvider>
        }
      />
      <Route
        path="/detail"
        element={
          <DAppProvider config={{}}>
            <NFTDetail />
          </DAppProvider>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
