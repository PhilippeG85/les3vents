import React, { useState } from "react";

const HomeContext = React.createContext();

function HomeContextProvider(props) {
  const [ home, setHome ] = useState(true);
  const { children } = props;

  function toggleHome(value) {
    return setHome(value);
  }

  return (
    <HomeContext.Provider value={{ home, toggleHome }}>
      { children }
    </HomeContext.Provider>
  );
}

export { HomeContextProvider, HomeContext };
