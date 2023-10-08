import React, { useEffect } from "react";
import Header from "./component/header/Header";
import Naav from "./component/Naav/Naav";

import Routing from "./routing/Routing";
import "./App.css";
import Footer from "./component/footer/Footer";
import UserProvider from "./context/context";
const App = () => {
  return (
    <>
      <UserProvider>
        <Header />
        <Naav />
        <Routing />
        <Footer />
      </UserProvider>
    </>
  );
};

export default App;
