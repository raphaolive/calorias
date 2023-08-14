import SectionOne from "./components/sections/SectionOne";
import MainContainer from "./components/container/MainContainer";
import SectionTwo from "./components/sections/SectionTwo";
import DataProvider from "./context/DataProvider";
import React, { useState } from "react";

function App() {
  const bottomPage = React.useRef(null);

  const [kcal, setKcal] = useState(0);

  const scrollDown = () => {
    bottomPage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <DataProvider.Provider
        value={{
          kcal,
          setKcal,
          scrollDown,
        }}
      >
        <MainContainer>
          <SectionOne />
          <SectionTwo />
        </MainContainer>
        <div ref={bottomPage} />
      </DataProvider.Provider>
    </div>
  );
}

export default App;
