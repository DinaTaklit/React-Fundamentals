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
// import ControlledInputs from './4.Forms/ControlledInputs'
// import MultipleInputs from './4.Forms/MultipleInputs'
// import UseRefBasics from './5.UseRef/UseRefBasics'
// import UseReducer from './6.UseReducer'
// import PropDrilling from './7.PropDrilling/PropDrilling'
// import ContextApi from './8.UseContext/ContextApi'
import FetchExample from './9.CustomHooks/FetchExample'

const App = () => {
  return (
    <div className="container">
      <FetchExample/>
    </div>
  );
}

export default App;
