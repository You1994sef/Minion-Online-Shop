import React from 'react';
import  { NavLink }  from 'react-router-dom';

const Navigation = (props) => (
    <nav>
        <ul>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
        </ul>
    </nav>
)

export default Navigation;