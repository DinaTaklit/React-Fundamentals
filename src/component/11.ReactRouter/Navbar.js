import {Link} from 'react-router-dom'
const Navbar = () => {
    const liStyle = {
        marginRight: "1rem"
    }
    return <nav>
        <div>
            <ul style={{display:'flex', justifyContent:'center'}}>
                <li style={liStyle}>
                    <Link to ="/">Home</Link>
                </li>
                <li style={liStyle}>
                    <Link to ="/about">About</Link>
                </li>
                <li>
                    <Link to ="/people">People</Link>
                </li>
            </ul>
        </div>
    </nav>;
};
  
export default Navbar;