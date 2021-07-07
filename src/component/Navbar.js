import {Link} from 'react-router-dom'
const Navbar = () => {
    return <nav className="appNav">
        <ul>
            <li>
                <Link to="/">UseState</Link>
                <ul>
                    <Link to="/">RandomeTitle</Link>
                    <Link to="/peopleArray">PeopleArray</Link>
                    <Link to="/counter">Counter</Link>
                </ul>
            </li>
            <li>
                <Link to="/basicsUseEffect">UseEffect</Link>
                <ul>
                    <Link to="/basicsUseEffect">BasicUseEffect</Link>
                    <Link to="/windowSize">WindowSize</Link>
                    <Link to="/fetchGithubUsers">FetchGithubUsers</Link>
                </ul>
            </li>
            <li>
                <Link to="/multipleReturns">ConditionalRendering</Link>
                <ul>
                    <Link to="/multipleReturns">MultipleReturns</Link>
                    <Link to="/shortCircuit">ShortCircuitg</Link>
                    <Link to="/showHide">ShowHide</Link>
                </ul>
            </li>
            <li>
                <Link to="/controlledInputs">Forms</Link>
                <ul>
                    <Link to="/controlledInputs">ControlledInputs</Link>
                    <Link to="/multipleInputs">multipleInputs</Link>
                </ul>
            </li>       
            <li>
                <Link to="/useRefBasics">UseRef</Link>
            </li>
            <li>
                <Link to="/useReducer">UseReducer</Link>
            </li>
            <li>
                <Link to="/propDrilling">PropDrilling</Link>
            </li>        
            <li>
                <Link to="/contextApi">UseContext</Link>
            </li>        
            <li>
                <Link to="/fetchExample">CustomHooks</Link>
            </li>        
            <li>
                <Link to="/propTypes">PropTypes</Link>
            </li>
            <li>
                <Link to="/reactRouter">ReactRouter</Link>
            </li>        
            <li>
                <Link to="/memoUseMemoUseCallback">MemoUseMemoUseCallback</Link>
            </li>
        </ul>
    </nav>;
};
  
export default Navbar;