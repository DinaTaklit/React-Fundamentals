import React from 'react';
import '../style/App.css';

// import RandomTitle  from "./1.UseState/RandomTitle";
// import PeopleArray from './1.UseState/PeopleArray'
// import Counter from './1.UseState/Counter'
// import BasicUseEffect from './2.UseEffect/BasicUseEffect'
// import WindowSize from './2.UseEffect/WindowSize'
// import FetchGithubUsers from './2.UseEffect/FetchGithubUsers'
// import MultipleReturns from './3.ConditionalRendering/MultipleReturns'
// import ShortCircuit from './3.ConditionalRendering/ShortCircuit'
// import ShowHide from './3.ConditionalRendering/ShowHide'
import ControlledInputs from './4.Forms/ControlledInputs'

const App = () => {
  return (
    <div className="container">
      <ControlledInputs/>
    </div>
  );
}
export default App;
