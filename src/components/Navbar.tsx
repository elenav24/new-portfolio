import './Navbar.css';
import { NavLink } from "react-router-dom"

export default function Navbar() {
    // home, about, projects, contact, experience
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="tab home">
                    <NavLink to="/" className="link">home</NavLink>
                </div>
                <div className="tab about">
                    <NavLink to="/about" className="link">about</NavLink>
                </div>
                <div className="tab experience">
                    <NavLink to="/experience" className="link">experience</NavLink>
                </div>
                <div className="tab projects">
                    <NavLink to="/projects" className="link">projects</NavLink>
                </div>
                <div className="tab contact">
                    <NavLink to="/contact" className="link">contact</NavLink>
                </div>
            </nav>
        </div>
    )
}
