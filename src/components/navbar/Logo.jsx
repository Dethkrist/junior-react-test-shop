import React from 'react';
import { Link } from 'react-router-dom';
import logo from  '../../images/brand-logo.svg'
import style from '../styles/Navbar.module.scss'

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.logo}>
          <Link className={style.homeLink} to="/">
            <img src={logo} alt="#"/>
          </Link>
        </div>
    )
  }
}

export default Logo;