import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            // link to sign out
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/signout">Sign Out</Link>
                </li>
            )
        } else {
            // link to sign in or sign up
            return [
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>,
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
            ];
        }
    }

    render() {
        return (
                <nav className="navbar navbar-light bg-faded m-b-2">
                    <Link to="/" className="navbar-brand">Redux Auth</Link>
                    <ul className="navbar-nav list-unstyled">
                        {this.renderLinks()}
                    </ul>
                </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Header);