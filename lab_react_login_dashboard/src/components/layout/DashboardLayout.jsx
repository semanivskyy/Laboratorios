import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = ({ user, onLogout, logoutVariant, menuItems, activeItem, onSelect, children }) => {
  return (
    <div className="dashboard">
      <Navbar user={user} onLogout={onLogout} logoutVariant={logoutVariant} />
      <div className="dashboard-body">
        <Sidebar items={menuItems} activeItem={activeItem} onSelect={onSelect} />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;