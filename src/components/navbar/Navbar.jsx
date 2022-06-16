import React from 'react';
import Menu from './Menu';
import CurrencyAndCart from './CurrencyAndCart';
import Logo from './Logo';
import style from '../styles/Navbar.module.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const {categoriesList} = this.props
    return  (
      <div className={style.navbarContainer}>
        <Menu categories={categoriesList}/>
        <Logo/>
        <CurrencyAndCart/>
      </div>
    )  
  }
}

export default Navbar;