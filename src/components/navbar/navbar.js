import React, { Component } from 'react';
import "./navbar.css";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            activeSection: null
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const scrollY = window.scrollY;
        // You may need to adjust the offset to account for the exact position of your sections
        const aboutSection = document.getElementById('about').offsetTop;
        const expSection = document.getElementById('exp').offsetTop;
        const proSection = document.getElementById('pro').offsetTop;

        if (scrollY >= aboutSection && scrollY < expSection) {
            this.setState({ activeSection: 'about' });
        } else if (scrollY >= expSection && scrollY < proSection) {
            this.setState({ activeSection: 'exp' });
        } else if (scrollY >= proSection) {
            this.setState({ activeSection: 'pro' });
        } else {
            this.setState({ activeSection: null });
        }
    }

    render() {
        return (
            <div className='navbarContainer'>
                <nav className="navbar">
                    <div className="justify-content-end mr-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.activeSection === 'about' ? 'active' : ''}`} href="#about"><span>01. </span>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.activeSection === 'exp' ? 'active' : ''}`} href="#exp"><span>02. </span>Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${this.state.activeSection === 'pro' ? 'active' : ''}`} href="#pro"><span>03. </span>Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
