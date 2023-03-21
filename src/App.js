import './App.css';
import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';

const validateEmail = email => typeof email === "string" && email.includes("@");

function App() {
  const [email, setEmail] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  const onEmailChange = event => {
    setEmail(event.target.value);
  };

  React.useEffect(() => {
    setIsDisabled(!validateEmail(email));
  }, [email]);

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Insert user email"
      />
      <button disabled={isDisabled}>Add</button>
    </>
  );
}

  
export default App;
