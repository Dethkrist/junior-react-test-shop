import React from 'react';
import { Link } from 'react-router-dom';
import { getCategory } from '../utils/data_loading/allQueries';
import { connect } from 'react-redux';
import dataLoader from '../utils/data_loading/dataLoader';
import Product from '../components/Product';
import style from '../styles/pages/Category.module.scss'



class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: [],
    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.categoryTitle = this.categoryTitle.bind(this);
    this.mapProduct = this.mapProduct.bind(this);
  }


  async fetchProducts(categ) {
    const query = getCategory(categ);
    const data = await dataLoader(query);
    const result = data.category.products;
    this.setState({productList: result});
  }


  componentDidMount() {
    const {category} = this.props.match.params;
    this.fetchProducts(category);
  }

  componentDidUpdate(prevProps) {
    const {category: prevCategory} = prevProps.match.params;
    const {category: currentCategory} = this.props.match.params;
    if(prevCategory!== currentCategory) {
      this.fetchProducts(currentCategory)
    };
  }

  categoryTitle() {
    const {category} = this.props.match.params;
    return category.charAt(0).toUpperCase() + category.slice(1);
  }
    

  mapProduct() {
    const {productList} = this.state;
    const {selectedCurrency} = this.props.currency;
    return productList.map((product) => (
            <Link 
              key={product.id} 
              style={{textDecoration:"none"}} 
              to={`/${product.category}/${product.id}`}
            >
              <Product
                selectedCurrency={selectedCurrency} 
                product={product}
              />
            </Link>    
))}


  render () {
    return (
      <section className={style.categoryContainer}>
        <h1 className={style.categoryTitle}>
          {this.categoryTitle()}
        </h1>
        <div className={style.categoryBody}>
          {this.mapProduct()}
        </div>
      </section>
    ) 
  }
}

const mapStateToProps = (state) => {
  return {currency: state.currency};
}


export default connect(mapStateToProps)(Category);