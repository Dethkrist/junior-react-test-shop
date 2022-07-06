import React from 'react';
import { connect } from 'react-redux';
import Selector from './elements/Selector';
import style from '../styles/components/Attributes.module.scss'
import ConfirmButton from './elements/ConfirmButton';

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAttributes: []
    }
    this.createAttributes = this.createAttributes.bind(this);
  }

  showPrice(prices) {
    const {selectedCurrency} = this.props.currency;
    if (prices !== undefined) {
      const price = prices.find((price) => {
        return price.currency.label === selectedCurrency.label;
      })
      return selectedCurrency.symbol + price.amount;
    }
  }

  // changeAttribute(selectedAttribute) {
  //   this.setState({
  //     selectedAttributes: selectedAttribute
  //   })
  // }


  createAttributes() {
    const {attributes} = this.props;
      return attributes && attributes.map(attribute =>
        <div key={attribute.id}>
          <h4 className={style.attributeName}>
            {attribute.name.toUpperCase()}
          </h4>
          <Selector
            changeAttribute={this.changeAttribute}
            id={attribute.id}
            attribute={attribute}
          />
        </div>
  )
}


  render() {
    const {brand, description, inStock, name, prices} = this.props;
    return(
      <div className={style.productContainer}>
        <div className={style.nameBrandContainer}>
          <h2 className={style.brand}>{brand}</h2>
          <h3 className={style.name}>{name}</h3>
        </div>
        <div className={style.attributeContainer}>
          {this.createAttributes()}
        </div>
        <div className={style.priceContainer}>
          <h4 className={style.attributeName}>
            PRICE:
          </h4>
          <h4 className={style.priceNumber}>
            {this.showPrice(prices)}
          </h4>
        </div>
        {!inStock ? 
          <p className={style.notInStockMessage}>
            This item is out of stock
          </p> : 
        ''}
        <ConfirmButton 
          text={inStock ? 'ADD TO CART' : 'NOT IN STOCK'}
          disabled={!inStock ? true : false}   
        />
        <div 
          className={style.description}
          dangerouslySetInnerHTML={{__html:description}}
        ></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {currency: state.currency};
}


export default connect(mapStateToProps)(Attributes);
