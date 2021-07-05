import React from 'react';
import '../style/App.css';

// import RandomTitle  from "./1.UseState/RandomTitle";
// import PeopleArray from './1.UseState/PeopleArray'
// import Counter from './1.UseState/Counter'
// import BasicUseEffect from './2.UseEffect/BasicUseEffect'
// import WindowSize from './2.UseEffect/WindowSize'
import FetchGithubUsers from './2.UseEffect/FetchGithubUsers'

const App = () => {
  return (
    <div className="container">
      <FetchGithubUsers/>
    </div>

  );
}
export default App;
