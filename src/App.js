import React from 'react';

// innRoad Imports
import Header from './components/header/header';
import BucketList from './components/Bucketlist/BucketList';
function App() {
  return (
    <div className="App">
      <Header heading="InnRoad"/>
      <BucketList />
    </div>
  );
}

export default App;
