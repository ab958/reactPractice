import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
    <div className="App">
    <h2>These pages are only now functional</h2>
      <nav style={{"padding": 50}}>
        <ul>
          <li style={{"paddingTop": "10px"}}>
            <Link to="/simpleredux">Simple Redux</Link>
          </li>
          {/* <li style={{"paddingTop": "10px"}}>
            <Link to="/simpleredux">Simple Redux</Link>
          </li> */}
        </ul>
      </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;