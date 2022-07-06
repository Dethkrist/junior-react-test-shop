import React from 'react';
import Cart from './Cart';
import Currency from './Currency';
import style from '../../styles/components/Navbar.module.scss'

class CurrencyAndCart extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className={style.currencyAndCart}>
        <Currency/>
        <Cart/>
      </div>
    )
  }
}

export default CurrencyAndCart;