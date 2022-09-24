import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Timer from './timer';
import Tidos from './tidos';

function App() {
  return (
    <React.Fragment>
<div>
<Routes>
  <Route path="/" element={<Tidos/>}/>
  <Route path="/timer" element={<Timer/>}/>
</Routes>
</div>
</React.Fragment>
    ); }


export default App;