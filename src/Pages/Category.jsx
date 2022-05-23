import React from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../queries/GetProducts';
import Product from '../components/Product';


class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this)
  }


  async fetchProducts(categ) {
    const result = await getProducts(categ)
    this.setState({productList: result})
  }


  componentDidMount() {
    this.fetchProducts(this.props.match.params.category)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchProducts(this.props.match.params.category)
    }  
  }


  render () {
    const {productList} = this.state
    const currentCategory = this.props.match.params.category
    return (
      <div>
        <h1 className="category__title">{currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h1>
        <div className="products__body">
          {productList.map((product) => (
            <Link key={product.id} className="product__link" to={`/${product.category}/${product.id}`}>
              <Product
                selectedCurrency={this.props.selectedCurrency} 
                id={product.id} 
                gallery={product.gallery} 
                inStock={product.inStock}
                name={product.name}
                prices={product.prices}/>
            </Link>    
          ))}
        </div>
      </div>
    ) 
  }
}

export default Category;