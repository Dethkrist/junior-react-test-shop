import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Navbar.module.scss'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.createMenu = this.createMenu.bind(this)
  }

  createMenu = () => {
    const {categories} = this.props
    return categories.map(({name}) => 
            <NavLink
              className={style.menuLink}
              to={`/${name}`}
              key={name}>
              {name.toUpperCase()}
            </NavLink>)
  }
  
  render() {
    return(
      <div className={style.menu}>
        {this.createMenu()}
      </div>
    )
  }
}

export default Menu;