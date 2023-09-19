import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppLayout = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>OpenLab</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/active_projects'>Active Projects</Link>
                </li>
                <li>
                    <Link to='/safety'>Safety</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link>
                </li>
                <li>
                    <Link to='/facilities'>Facilities</Link>
                </li>
                <li>
                    <Link to='/resources'>Resources</Link>
                </li>
            </ul>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about'>About</Route>
                <Route path='/active_projects'>Active Projects</Route>
                <Route path='/safety'>Safety</Route>
                <Route path='/contact'>Contact Us</Route>
                <Route path='/facilities'>Facilities</Route>
                <Route path='/resources'>Resources</Route>
            </Routes>

        </nav>
    );
}

export default AppLayout;
