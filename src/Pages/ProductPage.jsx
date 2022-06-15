import React from 'react';
import Gallery from '../components/Gallery';
import Attributes from '../components/Attributes';
import style from './styles/ProductPage.module.scss'
import { getProductPage } from '../utils/data_loading/allQueries';
import { loadData } from '../utils/data_loading/loadData';


class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productAttributes: {},
    }
    this.fetchAttributes = this.fetchAttributes.bind(this)
  }

  async fetchAttributes(id) {
    const query = getProductPage(id)
    const data = await loadData(query)
    const result = data.product
    this.setState({productAttributes: result})
  }

  componentDidMount() {
    const {id} = this.props.match.params
    this.fetchAttributes(id)
  }
  render() {
    const {productAttributes} = this.state
    return (
      <div className={style.productPageContainer}>
        <Gallery gallery={productAttributes.gallery}/>
        <Attributes 
          attributes={productAttributes.attributes} 
          brand={productAttributes.brand} 
          description={productAttributes.description} 
          inStock={productAttributes.inStock} 
          name={productAttributes.name} 
          prices={productAttributes.prices}/>
      </div>  
    )
  }
}


export default ProductPage;