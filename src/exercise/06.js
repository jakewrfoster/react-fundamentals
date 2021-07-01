// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // I didn't realize that this was extra credit 3 as well.
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(name);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setError((value === value.toLowerCase()) ? '' : 'Username must be lower case');
    setName(value);
  };
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="myCoolForm">Username:</label>
        <input id="myCoolForm" type="text" onChange={handleChange} value={name} />
      </div>
      <button disabled={error.length > 1} type="submit">Submit</button>
      {error.length > 1 ? <p role="alert" style={{color: 'red'}}>{error}</p> : null}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
