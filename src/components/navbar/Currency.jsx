import React from 'react';
import { connect } from 'react-redux';
import { getCurrencies } from '../../utils/data_loading/allQueries';
import dataLoader from '../../utils/data_loading/dataLoader';
import CurrencyMenu from '../elements/CurrencyMenu';
import CurrencyButton from '../elements/CurrencyButton';
import { changeCurrency } from '../../store/currencySlice';






class Currency extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currencies: [],
      menu: false,
    };
    this.ref = React.createRef();
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  async fetchCurrencies() {
    const query = getCurrencies();
    const data = await dataLoader(query);
    const result = data.currencies;
    this.setState({
      currencies: result,
    });
  }


  showMenu() {
    const {menu} = this.state;
    if (!menu) {
      this.setState({menu: true})
    } else {
      this.setState({menu: false})
    };
  }

  closeMenu() {
    this.setState({menu: false});
  }

  checkClickOutside = e => {
    const {menu} = this.state;
    if (menu && this.ref.current && !this.ref.current.contains(e.target)) {
      this.closeMenu();
      document.removeEventListener('click', this.checkClickOutside);
    };
  }

  renderMenu() {
    const {selectedCurrency} = this.props.currency;
    const {menu, currencies} = this.state;
    if (menu) {
      document.addEventListener('click', this.checkClickOutside);
      return (
        <CurrencyMenu 
          menu={menu}
          currencies={currencies} 
          selectedCurrency={selectedCurrency} 
          callback={this.selectCurrency}
        />
      )
    }
  }

  selectCurrency(currency) {
    this.props.changeCurrency(currency);
    this.setState({menu: false});
  }

  componentDidMount() {
    this.fetchCurrencies();
  }



  render() {
    const {selectedCurrency} = this.props.currency;
    const { menu } = this.state;
    return (
      <div ref={this.ref}>
        <CurrencyButton 
          menu={menu} 
          selectedCurrency={selectedCurrency} 
          callback={this.showMenu}
        />
        {this.renderMenu()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currency: state.currency};
}

export default connect(mapStateToProps, {changeCurrency})(Currency);