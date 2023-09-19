import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
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
                        <Route path='/'>Home</Route>
                        <Route path='/about'>About</Route>
                        <Route path='/active_projects'>Active Projects</Route>
                        <Route path='/safety'>Safety</Route>
                        <Route path='/contact'>Contact Us</Route>
                        <Route path='/facilities'>Facilities</Route>
                        <Route path='/resources'>Resources</Route>
                    </Routes>

                </nav>
            </BrowserRouter>
        </div>
    );
}

export default App;
