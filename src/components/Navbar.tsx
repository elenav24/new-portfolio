import './Navbar.css';
import { NavLink } from "react-router-dom"

export default function Navbar() {
    // home, about, projects, contact, experience
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink to="/" className="tab home">home</NavLink>
                <NavLink to="/about" className="tab about">about</NavLink>
                <NavLink to="/experience" className="tab experience">experience</NavLink>
                <NavLink to="/projects" className="tab projects">projects</NavLink>
                <NavLink to="/contact" className="tab contact">contact</NavLink>
            </nav>
        </div>
    )
}
