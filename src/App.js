import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
  return (
      <div className="App">
        <ReactTableComponent/>
      </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
export default App;
