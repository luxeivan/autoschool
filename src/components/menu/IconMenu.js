
import React from 'react'
import { Link } from 'react-router-dom';
import css from './IconMenu.css'

export default function IconMenu({ url, name, iconName }) {
    return (
        <Link to={url}><div className='iconmenu'>            
            <span className='iconmenu__icon material-symbols-outlined'>{iconName}</span>
            <span className='iconmenu__text'>{name}</span>
        </div>
        </Link>
    )
}
