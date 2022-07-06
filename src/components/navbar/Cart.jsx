import React from 'react';
import cartLogo from '../../images/empty-cart.svg'
import style from '../../styles/components/Navbar.module.scss'

class Cart extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className={style.cart}>
        <img src={cartLogo}/>
      </div>
    )
  }
}

export default Cart;