import React from 'react';


const NavItem = () => {
    let navItems = ["Home", "About", "Services", "Contact"]
    return(
        <ul className="navbar-nav">
            {navItems.map((item, index) =>
                <li className="nav-item active" key={index}>
                    <a className="nav-link" href="#">{item}</a>
                </li>)}
        </ul>
    )

};


export const NavBar = (props) => {
    return(
        <nav className="navbar navbar-dark sitcky-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand ml-3" href="#">{props.logo}</a>
                <button className="navbar-toggler" type="button" data-toggle="Collapse" data-target="navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavItem />
                    </ul>
                </div>
            </div>
        </nav>
    )
};
