import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

// Make Home and About as two seperate Components
function Home() {
    return <h2>Home Page</h2>;
  }



function UserProfile() {
  let { username } = useParams();
  return <h2>User Profile: {username}</h2>;
}

function RouteParameters() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/johndoe">User Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/user/:username" element={<UserProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default RouteParameters;