import React from 'react';
import img from '../../images/vector.svg'
import style from '../../styles/elements/CurrencyButton.module.scss'

class CurrencyButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { menu, selectedCurrency, callback } = this.props;
    return (
      <button 
        className={style.currencyLabel}
        onClick={() => callback()}
      >
        {selectedCurrency.symbol}
        <img 
          className={style.arrow} 
          src={img} 
          style={menu ? 
          {transform: 'rotate(180deg)'} : 
          {transform: 'rotate(0deg)'}}
        />
      </button>
    )
  }
}

export default CurrencyButton;