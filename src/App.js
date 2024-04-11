import React from "react";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.js";
import Navbar from "./Components/NavBar/Navbar.js"
import Main from "./Components/Main/Main.js";


function App() {
  
  return (
    <div className="App">
      <ScrollToTop />
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
