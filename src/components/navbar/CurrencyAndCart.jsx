import React from 'react';
import Currency from './Currency';
import style from '../styles/Navbar.module.scss'

class CurrencyAndCart extends React.Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className={style.currencyAndCart}>
        <Currency/>
      </div>
    )
  }
}

export default CurrencyAndCart;