import React from 'react';
import style from '../../styles/elements/CurrencyMenu.module.scss'

class CurrencyMenu extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { currencies, selectedCurrency, menu, callback } = this.props;
    return (
      <div
        className={`${style.currencyMenu} 
        ${menu ? style.menuOn : style.menuOff}`}
      >
        <ul className={style.currMenuList}>
          {currencies.map((currency) => (
            <li
              key={currency.label}
              className={`
                  ${style.currencyMenuItem} 
                  ${selectedCurrency.symbol === currency.symbol ? 
                  style.selected : ''}
                  `}
              onClick={() => callback(currency)}>
                {currency.symbol} {currency.label}
            </li>))}
        </ul>
      </div>
    )
  }
}

export default CurrencyMenu;