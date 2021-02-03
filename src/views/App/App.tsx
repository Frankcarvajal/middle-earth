import './App.css';
import React from 'react';

import {Avatar} from '../../components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar
          src="https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/67482164_1475353212606533_2873262099444793344_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZdLhDdMLcHAAX9aQkCO&_nc_ht=scontent.fsjc1-3.fna&oh=bbc404a1c9ec6e20375bde68531fd084&oe=604060C0"
          name="Franklin Carvajal"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
