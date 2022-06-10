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
    this.categoryTitle = this.categoryTitle.bind(this)
    this.mapProduct = this.mapProduct.bind(this)
  }


  async fetchProducts(categ) {
    const result = await getProducts(categ)
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
                id={product.id} 
                gallery={product.gallery} 
                inStock={product.inStock}
                name={product.name}
                prices={product.prices}/>
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