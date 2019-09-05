import React from 'react';

// innRoad Imports
import Header from './components/header/header';
import BucketList from './components/Bucketlist/BucketList';
import './styles/app.sass';
function App() {
  return (
    <div className="App">
      <Header heading="InnRoad"/>
      <div className="Container">
          <BucketList />
      </div>
      
    </div>
  );
}

export default App;
