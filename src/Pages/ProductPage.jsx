import React from 'react';
import getProductPage from '../queries/GetProductPage';
import Gallery from '../components/Gallery';
import style from './styles/ProductPage.module.scss'

class ProductPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productAttributes: {},
    }
    this.fetchAttributes = this.fetchAttributes.bind(this)
  }

  async fetchAttributes(id) {
    const result = await getProductPage(id)
    this.setState({productAttributes: result})
  }

  componentDidMount() {
    this.fetchAttributes(this.props.match.params.id)
  }
  render() {
    const {productAttributes} = this.state

    return (
      <div className={style.productPageContainer}>
        <Gallery gallery={productAttributes.gallery}/>
      </div>  
    )
  }
}


export default ProductPage;