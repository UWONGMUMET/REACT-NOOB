import React from "react";
import ListJoke from "./ListJoke";
import '../Jokes Generator/Jokes.css'

const JokesApp = () => {
  return <div className="App">
    <h1>Jokes Generator Using React and Joke API</h1>
    <ListJoke></ListJoke>
  </div>;
};

export default JokesApp;

// import React from 'react';
// import Joke from './components/Joke';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <h1>Joke Generator Using React and Joke API</h1>
//             <Joke />
//         </div>
//     );
// }

// export default App;
