import "./App.css";
import Header from "./Components/Header/Header";
import MainMobile from "./Components/Main/MainMobile/MainMobile";
import MainDesktop from "./Components/Main/MainDesktop/MainDesktop";
import { useState, useEffect } from "react";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      {screenWidth < 992 ? <MainMobile /> : <MainDesktop />}
    </div>
  );
}

export default App;
