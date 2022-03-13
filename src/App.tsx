import React from 'react';
import Title from './_Title/Title';
import Menu from './_Menu/Menu';
import Desc from './_Desc/Desc';
import Region from './_Region/Region';
import Diff from './_Diff/Diff';
import System from './_System/System';
import SumUp from './_SumUp/SumUp';
import Last from './_Last/Last';
import './css/App.css';

function App() {
  return (
    <body className="pokeIntroduce">
      <Title />
      <Menu />
      <Desc />
      <Region />
      <Diff />
      <System />
      <SumUp />
      <Last />
    </body>
  );
}

export default App;
