import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Timer from './timer';
import Tidos from './tidos';

function App() {
  return (
<div className>
<Routes>
  <Route path="/" element={<Tidos/>}/>
  <Route path="/timer" element={<Timer/>}/>
</Routes>
</div>
    ); }


export default App;