import React from 'react';
import style from '../styles/components/Product.module.scss'

class Product extends React.Component {
  constructor(props) {
    super(props)

    this.showPrice = this.showPrice.bind(this)
  }

  showPrice(prices) {
    const {selectedCurrency} = this.props
    const price = prices.find((price) => {
      return price.currency.label === selectedCurrency.label
    })
    return selectedCurrency.symbol + price.amount
  }

  render() {
    const {product} = this.props
    return (
          <div className={style.productContainer}>
            <div className={style.imgContainer}>
              <img 
                className={style.productImg} 
                src={product.gallery[0]} 
                alt={product.id}
              />
              {!product.inStock ? 
              <div className={style.imgNotInStockCover}>OUT OF STOCK</div>: ''}
            </div>
            <div className={style.productTitleContainer}>
              <div 
                className={product.inStock ?
                `${style.productTitle}`: 
                `${style.productTitle} ${style.notInStock}`}>
                {product.brand} {product.name}
              </div>
              <div className={product.inStock ?
                `${style.productPrice}`: 
                `${style.productPrice} ${style.notInStock}`}>
                {this.showPrice(product.prices)}
              </div>
            </div>  
          </div>
    )
  }
}

export default Product;