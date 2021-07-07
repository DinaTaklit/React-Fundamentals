import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../style/App.css';
import '../style/NavBar.css';

import RandomTitle  from "./1.UseState/RandomTitle";
import PeopleArray from './1.UseState/PeopleArray'
import Counter from './1.UseState/Counter'
import BasicUseEffect from './2.UseEffect/BasicUseEffect'
import WindowSize from './2.UseEffect/WindowSize'
import FetchGithubUsers from './2.UseEffect/FetchGithubUsers'
import MultipleReturns from './3.ConditionalRendering/MultipleReturns'
import ShortCircuit from './3.ConditionalRendering/ShortCircuit'
import ShowHide from './3.ConditionalRendering/ShowHide'
import ControlledInputs from './4.Forms/ControlledInputs'
import MultipleInputs from './4.Forms/MultipleInputs'
import UseRefBasics from './5.UseRef/UseRefBasics'
import UseReducer from './6.UseReducer'
import PropDrilling from './7.PropDrilling/PropDrilling'
import ContextApi from './8.UseContext/ContextApi'
import FetchExample from './9.CustomHooks/FetchExample'
import PropTypes from './10.PropTypes'
import ReactRouter from './11.ReactRouter'
import Optimisation from './12.MemoUseMemoUseCallback'

import Navbar from './Navbar'

const App = () => {
  return (
    <div className="container">
      <Router>
        <h2 style={{marginBottom:"3rem"}}> React Fundments </h2>
        <Navbar/>
        <Switch>
            <Route exact path="/">
              <RandomTitle ></RandomTitle>
            </Route>

            <Route path="/peopleArray">
              <PeopleArray/>
            </Route>

            <Route path="/counter">
              <Counter/>
            </Route>

            <Route path="/basicsUseEffect">
              <BasicUseEffect/>
            </Route>

            <Route path="/windowSize">
              <WindowSize/>
            </Route>

            <Route path="/fetchGithubUsers">
              <FetchGithubUsers />
            </Route>

            <Route path="/multipleReturns">
              <MultipleReturns/>
            </Route>

            <Route path="/shortCircuit">
              <ShortCircuit/>
            </Route>

            <Route path="/showHide">
              <ShowHide/>
            </Route>

            <Route path="/controlledInputs">
              <ControlledInputs/>
            </Route>

            <Route path="/multipleInputs">
              <MultipleInputs/>
            </Route>

            <Route path="/useRefBasics">
              <UseRefBasics/>
            </Route>

            <Route path="/useReducer">
              <UseReducer/>
            </Route>
            
            <Route path="/propDrilling">
              <PropDrilling/>
            </Route>

            <Route path="/contextApi">
              <ContextApi/>
            </Route>

            <Route path="/fetchExample">
              <FetchExample/>
            </Route>

            <Route path="/propTypes">
              <PropTypes/>
            </Route>

            <Route path="/reactRouter">
              <ReactRouter/>
            </Route>

            <Route path="/memoUseMemoUseCallback">
              <Optimisation/>
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
