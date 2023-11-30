import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
    return <h2>Home Page</h2>;
  }

  function Profile() {
    return <h2>Profile section</h2>
  }

  function Settings() {
    return <h2>Settings</h2>
  }

function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
        <nav>
        <ul>
        <li><Link to="dashboard/profile">Profile</Link></li>
        <li><Link to="dashboard/settings">Settings</Link></li>
        </ul>
        </nav>
        
        <Routes>
        <Route path="/dashboard/profile" element={<Profile/>} />
        <Route path="/dashboard/settings" element={<Settings/>} />
        </Routes>
      </div>
    );
  }
  
  function NestedRouting() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/dashboard/*" element={<Dashboard/>} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default NestedRouting;
  