import React from 'react'

import menuItemReparaties from './images/reparaties.png';
import menuItemHome from './images/home.png';
import menuItemAgenda from './images/agenda.png';
import menuItemProfiel from './images/profiel.png';
import menuItemBeheerder from './images/beheerder.png';

const Menu = () => {
    return (
        <div class="mobile-menu">
            <button class="menu-btn"><img src={menuItemProfiel} /></button>
            <button class="menu-btn"><img src={menuItemAgenda} /></button>
            <button class="menu-btn home"><img src={menuItemHome} /></button>
            <button class="menu-btn"><img src={menuItemReparaties} /></button>
            <button class="menu-btn"><img src={menuItemBeheerder} /></button>
        </div>
    )
}
export default Menu