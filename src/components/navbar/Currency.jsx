import React from 'react';
import { getCurrencies } from '../../utils/data_loading/allQueries';
import { loadData } from '../../utils/data_loading/loadData';
import style from '../styles/Navbar.module.scss'
import img from '../../images/vector.svg'

class Currency extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currencies: [],
      selectedCurrency: {symbol: '$', label: 'USD'},
      menu: false,
    }
    this.fetchCurrencies = this.fetchCurrencies.bind(this)
    this.showMenu = this.showMenu.bind(this)
    this.selectCurrency = this.selectCurrency.bind(this)
  }

  async fetchCurrencies() {
    const query = getCurrencies()
    const data = await loadData(query)
    const result = data.currencies
    this.setState({
      currencies: result,
    })
  }

  showMenu() {
    const {menu} = this.state
    if (!menu) {
      this.setState({menu: true})
    } else {
      this.setState({menu: false})
    }
  }



  selectCurrency(currency) {
    this.setState({
      selectedCurrency: 
        {
          symbol: currency.symbol,
          label: currency.label
        },
      menu: false
      })
  }

  componentDidMount() {
    this.fetchCurrencies()
  }

  render() {
    const { currencies, selectedCurrency, menu } = this.state
    return (
      <div className={style.currencySelector}>
        <button 
          className={style.currencyLabel}
          onClick={() => this.showMenu()}>
          {selectedCurrency.symbol}
          <img 
            className={style.arrow} 
            src={img} 
            style={menu ? 
            {transform: 'rotate(180deg)'} : 
            {transform: 'rotate(0deg)'}}/>
        </button>
        <div
          className={`${style.currencyMenu} ${menu ? style.menuOn : style.menuOff}`}>
            <ul className={style.currMenuList}>
              {currencies.map((currency) => (
                <li
                  key={currency.label}
                  className={style.currencyMenuItem}
                  onClick={() => this.selectCurrency(currency)}>
                    {currency.symbol} {currency.label}
                </li>
              ))}
            </ul>
        </div>
      </div>
    )
  }
}

export default Currency;