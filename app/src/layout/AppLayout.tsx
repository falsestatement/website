import { Link, Route, Routes } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Home from "../pages/Home";

const pages = [
    {
        navName: 'OpenLab',
        route: '/',
        element: <Home />
    },
    {
        navName: 'Apply',
        route: '/apply',
        element: <div>apply</div>
    },
    {
        navName: 'Staff',
        route: '/staff',
        element: <div>staff</div>
    },
    {
        navName: 'Active Organizations',
        route: '/active-orgs',
        element: <div>orgs</div>
    },
    {
        navName: 'Policies',
        route: '/policies',
        element: <div>policies</div>
    },
    {
        navName: 'Contact Us',
        route: '/contact',
        element: <div>contact</div>
    },
]

const AppLayout = () => {
    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={1} factor={0.1} sticky={{ start: 0, end: 0.32 }}>
                    <nav className="md:flex md:justify-center md:top-0 hidden">
                        {pages.map(page =>
                            <Link to={page.route}>
                                <div
                                    key={page.navName}
                                    className='text-white px-5 py-5 hover:text-illini-orange text-lg'
                                >
                                    {page.navName}
                                </div>
                            </Link>
                        )
                        }
                    </nav>
                    <nav className="flex justify-between md:hidden">
                    </nav>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2} factor={1}>
                    <div className="bg-openlab-main bg-cover min-h-[50em]" />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.2} factor={1}>
                    <div className="bg-illini-blue bg-opacity-80 min-h-[50em]" />
                </ParallaxLayer>
                <ParallaxLayer offset={0.85} speed={1.2} factor={1}>
                    <Routes>
                        {pages.map(page =>
                            <Route
                                key={page.navName}
                                path={page.route}
                                element={page.element}
                            />)
                        }
                    </Routes>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default AppLayout;
