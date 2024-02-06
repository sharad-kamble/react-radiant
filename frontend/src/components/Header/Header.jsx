import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel1 from '../../assets/images/Carousel1.png';
import logo from '../../assets/images/logo.png';
import './Header.css'; // Import your CSS file

const Header = () => {


    const [isScrolled, setIsScrolled] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);
    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
    // scroll to top
    const handleLinkClick = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler && window.innerWidth <= 991) {
            navbarToggler.click();
        }
        setMenuExpanded(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    // combined two fun
    const handleCombinedClick = () => {
        handleLinkClick();
        scrollToTop();
    };
    return (
        <div>
            <nav className={`navbar navbar-expand-lg shadow-sm navbar-light ${isScrolled ? 'fixed-top' : ''}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} style={{ maxHeight: "80px", width: "200px" }} alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2">
                                <Link className="nav-link active" onClick={handleCombinedClick} aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item px-2 ">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item  dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="/courses"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Courses
                                </Link>
                                <ul className="course-dropdown dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/full-stack-development-course">
                                            Full Stack Java Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/data-science-course">
                                            Data Science
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/web-development-course">
                                            Web Development
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/digital-marketing-course">
                                            Digital Marketing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/ui-ux-design-course">
                                            UI/UX Design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/salesforce-course">
                                            Salesforce
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" onClick={handleCombinedClick} to="/courses/powerbi-course">
                                            Power BI
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item px-2">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/services">
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item px-2">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/enroll-now">
                                    Enroll Now
                                </Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/placement">
                                    Placement
                                </Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/projects">
                                    Projects
                                </Link>
                            </li>
                            {/* <li className="nav-item px-2">
                                <Link className="nav-link" to="/blogs">
                                    Blogs
                                </Link>
                            </li> */}
                            <li className="nav-item px-2">
                                <Link className="nav-link" onClick={handleCombinedClick} to="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
