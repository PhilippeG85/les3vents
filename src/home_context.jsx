import React, { useState } from "react";

const HomeContext = React.createContext();

function HomeContextProvider(props) {
  const location = window.location.pathname;
  const initState = location === "/";

  const [ home, setHome ] = useState(initState);
  const { children } = props;

  function toggleHome(value) {
    return setHome(value);
  }

  return (
    <HomeContext.Provider value={{
      home,
      toggleHome
    }}
    >
      { children }
    </HomeContext.Provider>
  );
}

export { HomeContextProvider, HomeContext };
