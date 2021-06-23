import './navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='navbar-left'>
                    <Link className='link' to='/'>
                        <p className='alice'>Alice</p>
                        <p className='alice'>Del Simone</p>
                    </Link>
                </div>
                <div className='navbar-right'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/gallery'>Gallery</Link>
                    <Link className='link' to='/lessons'>Lessons</Link>
                    <Link className='link' to='/news'>News</Link>
                    <Link className='link' to='/contact'>Contact</Link>
                </div>
            </div>
        )

    }
}

export default Navbar;