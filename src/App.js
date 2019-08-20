import React from 'react';
import CheckList from './components/CheckList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Technical test</h1>
      <p>
        Instructions => <a href="https://gist.github.com/lfalorni/9359cbb7b9ba53a4dc35b092ab0729ff" target="_blank">https://gist.github.com/lfalorni/9359cbb7b9ba53a4dc35b092ab0729ff</a>
      </p>
      <CheckList></CheckList>
    </div>
  );
}

export default App;
