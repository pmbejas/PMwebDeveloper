import './layout.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <div className="container-fluid m-0 p-0">
        <section className="navbar-section row align-items-center">
            <NavBar />
        </section>
        <section>
            <Outlet />
        </section>
        <section>
            <Footer />
        </section>
    </div>
  )
}
