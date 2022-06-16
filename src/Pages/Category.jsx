import React from 'react';
import { Link } from 'react-router-dom';
import { getCategory } from '../utils/data_loading/allQueries';
import { loadData } from '../utils/data_loading/loadData';

import Product from '../components/Product';

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
    }
    this.fetchProducts = this.fetchProducts.bind(this)
    this.categoryTitle = this.categoryTitle.bind(this)
    this.mapProduct = this.mapProduct.bind(this)
  }


  async fetchProducts(categ) {
    const query = getCategory(categ)
    const data = await loadData(query)
    const result = data.category.products
    this.setState({productList: result})
  }


  componentDidMount() {
    const {category} = this.props.match.params
    this.fetchProducts(category)
  }

  componentDidUpdate(prevProps) {
    const {category: prevCategory} = prevProps.match.params
    const {category: currentCategory} = this.props.match.params
    if(prevCategory!== currentCategory) {
      this.fetchProducts(currentCategory)
    }  
  }

  categoryTitle() {
    const {category} = this.props.match.params
    return category.charAt(0).toUpperCase() + category.slice(1)
  }
    

  mapProduct() {
    const {productList} = this.state
    const {selectedCurrency} = this.props
    return productList.map((product) => (
            <Link 
              key={product.id} 
              style={{textDecoration:"none"}} 
              to={`/${product.category}/${product.id}`}>
              <Product
                selectedCurrency={selectedCurrency} 
                product={product}/>
            </Link>    
))}


  render () {
    return (
      <div>
        <h1 className="category__title">
          {this.categoryTitle()}
        </h1>
        <div className="products__body">
          {this.mapProduct()}
        </div>
      </div>
    ) 
  }
}

export default Category;