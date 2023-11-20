import 'layout.css';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';
import { Footer } from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <div className="container-fluid m-o p-0">
        <section>
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
