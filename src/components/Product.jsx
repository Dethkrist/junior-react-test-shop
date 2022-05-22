import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.showPrice = this.showPrice.bind(this)
  }

  showPrice(prices) {
    const price = prices.find((price) => {
      return price.currency.label === this.props.selectedCurrency
    })
    return price.currency.symbol + price.amount
  }

  render() {
    const {id, gallery, inStock, name, prices} = this.props
    return (
          <div className="product__container">
            <div className="img__container">
              <img className="product__img" src={gallery[0]} alt={id}/>
                {!inStock ? <div className="img__notInStock">OUT OF STOCK</div>: undefined}
            </div>
            <div className="product__title_container">
              <div className={inStock ? "product__title": "product__title_notInStock"}>
                {name}
              </div>
              <div className={inStock ? "product__price": "product__price_notInStock"}>
                {this.showPrice(prices)}
              </div>
            </div>  
          </div>
    )
  }
}

export default Product;