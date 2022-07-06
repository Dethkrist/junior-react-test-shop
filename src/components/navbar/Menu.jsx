import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../styles/components/Navbar.module.scss'

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
      <nav className={style.menu}>
        {this.createMenu()}
      </nav>
    )
  }
}

export default Menu;