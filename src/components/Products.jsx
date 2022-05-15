import { reobserveCacheFirst } from '@apollo/client/core/ObservableQuery';
import React from 'react';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: {}
    }
  }

componentDidMount() {
  this.fetchProducts()
}

  // componentDidUpdate(prevState) {
  //   if (prevState.productList !== this.state.productList) {
  //     this.fetchProducts()
  //   }
  // }


  fetchProducts() {
    const {data, currentCategory} = this.props
    const selectedProducts = data.categories.find((category) => {
      return category.name === currentCategory
    })
    this.setState({productList: selectedProducts})
  }

  render () {
    const {currentCategory} = this.props
    console.log(this.state.productList)
    return (
      <div>
        <h1 className="category__title">{currentCategory.toUpperCase()}</h1>
        {/* {this.state.productList.products.map(({product}) => (
          <Product productInfo={product}/>
        ))} */}
      </div>
    )  
  }
}

export default Products;