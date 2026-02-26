import { useLocation, useNavigate } from "react-router-dom";

const Info = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rawRole = location.state?.role || 'user';
  const role = rawRole.toLowerCase(); 
  const user = location.state?.user || { name: 'Guest', email: 'N/A' };

  if (!location.state) {
    return (
      <div className="unauthorized">
        <h2>No session found. Please login.</h2>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    );
  }

  const renderHeader = () => {
    switch (role) { 
      case 'admin':
        return (
          <div className="header-card admin-bg">
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user.fullName || user.name}! You have full system control.</p>
          </div>
        );
      case 'manager':
        return (
          <div className="header-card manager-bg">
            <h1>Manager Dashboard</h1>
            <p>Welcome, {user.fullName || user.name}! Manage your team and projects.</p>
          </div>
        );
      default:
        return (
          <div className="header-card user-bg">
            <h1>User Dashboard</h1>
            <p>Welcome, {user.fullName || user.name}!</p>
          </div>
        );
    }
  };

  const renderStats = () => {
    if (role === 'admin') return <div className="stat-card blue-stat"><h3>Total Users</h3><p>100</p></div>;
    if (role === 'manager') return <div className="stat-card white-stat border-blue"><h3>Team Members</h3><p>10</p></div>;
    return <div className="stat-card blue-stat"><h3>My Tasks</h3><p>5</p></div>;
  };
  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="nav-content">JWT Auth</div>
        <button className="logout-btn" onClick={() =>{
          fetch(`${import.meta.env}/api/auth/logout`,{
            method:'DELETE',
            credentials:'include',
          })
          .then( navigate('/login'))
          }}>Logout</button>
      </nav>

      <main className="dashboard-content">
        <div className="content-inner">
          
          {renderHeader()}

          <div className="section-spacer">
            {renderStats()}
          </div>

          <div className="info-card">
            {role === 'manager' ? (
              <>
                <h3 className="card-title"> Recent Activities</h3>
                <ul className="activity-list">
                  <li className="bullet-green">Approved project proposal from Team A</li>
                  <li className="bullet-blue">Reviewed performance reports</li>
                  <li className="bullet-yellow">Scheduled team meeting for next week</li>
                  <li className="bullet-purple">Assigned new tasks to team members</li>
                </ul>
              </>
            ) : (
              <>
                <h3 className="card-title">Your Information</h3>
                <div className="info-row"><span>Name:</span> <span>{user.fullName || user.name}</span></div>
                <div className="info-row"><span>Email:</span> <span>{user.email}</span></div>
                <div className="info-row">
                  <span>Role:</span> 
                  <span className={`role-badge ${role}`}>{role.charAt(0).toUpperCase() + role.slice(1)}</span>
                </div>
              </>
            )}
          </div>

          <div className="access-alert">
            <div className="info-icon">i</div>
            <p>
              {role.charAt(0).toUpperCase() + role.slice(1)} Access Level: 
              {role === 'admin' ? " You have full administrative privileges." : 
               role === 'manager' ? " You can manage team members and tasks." : 
               " You have basic access to view your dashboard."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Info;