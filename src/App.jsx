import Header from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
function App() {
  const isAdminPage = location.pathname.startsWith('/admin');
    const islogin  = location.pathname ===  "login";
    const isboth = !islogin && isAdminPage
  return (
    <div className="app">
        {!isboth && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App