import React from 'react';


class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.showPrice = this.showPrice.bind(this)
  }




  showPrice(product) {
    const price = product.prices.find((price) => {
      return price.currency.label === this.props.selectedCurrency
    })
    return price.currency.symbol + price.amount
  }



  render () {
    const {productList} = this.props
    console.log(productList)
    return (
      <div>
        <h1 className="category__title">{this.props.currentCategory.toUpperCase()}</h1>
        <div className="products__body">
            {productList.map((product) => ( 
            <div key={product.id} className="product__container">
              <div className="img__container">
                <img className="product__img" src={product.gallery[0]} alt={product.id}/>
                {!product.inStock ? <div className="img__notInStock">OUT OF STOCK</div>: undefined}
              </div>
              <div className="product__title_container">
                <div className={product.inStock ? "product__title": "product__title_notInStock"}>
                  {product.name}
                </div>
                <div className={product.inStock ? "product__price": "product__price_notInStock"}>
                  {this.showPrice(product)}
                </div>
              </div>  
            </div>
        ))}
        </div>
      </div>
    ) 
  }
}

export default Products;