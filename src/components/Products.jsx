import React from 'react';


class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  showPrice(product) {
    const price = product.prices.find((price) => {
      return price.currency.label === this.props.selectedCurrency
    })
    return price.currency.symbol + price.amount
  }


  render () {
    const {currentCategory} = this.props
    return (
      <div>
        <h1 className="category__title">{currentCategory.name.toUpperCase()}</h1>
        <div className="products__body">
            {currentCategory.products.map((product) => ( 
            <div key={product.id} className="product__container">
              <img className="product__img" src={product.gallery[0]} alt="1111"/>
              <div className="product__title">{product.name}</div>
              <div className="product__price">{this.showPrice(product)}</div>
            </div>
        ))}
        </div>
      </div>
    )  
  }
}

export default Products;