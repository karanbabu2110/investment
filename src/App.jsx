import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput, //To have old data which is not changed
        [inputIdentifier]: newValue,
      };
    });
  }
  return <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    <Results userInput={userInput}/>
  </>
}

export default App;
