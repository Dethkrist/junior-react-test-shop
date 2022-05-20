import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Products from './components/Products';
import getCategoriesList from './queries/GetCategoriesList';
import getProducts from './queries/GetProducts';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      categoriesList: [],
      productList: [],
      currentCategory : '',
      selectedCurrency: 'USD'
    }
    this.setCategory = this.setCategory.bind(this)
    this.fetchstart = this.fetchStart.bind(this)
  }


  setCategory(name) {
    this.fetchProducts(name)
  }

  
  async fetchProducts(name) {
    const result = await getProducts(name)
    this.setState({productList: result, currentCategory: name})
  }


  async  fetchStart() {
    const result = await getCategoriesList()
    const startCategory = result[0].name
    const resultAll = await getProducts(startCategory)
    this.setState({categoriesList: result, productList: resultAll, currentCategory: startCategory})
  }


  componentDidMount() {
    this.fetchStart()
}



  render () {
    const {productList, currentCategory, selectedCurrency, categoriesList} = this.state
    return (
      <div className="container">
        <Navbar callback={this.setCategory} categoriesList={categoriesList}/>
        <Products productList={productList} currentCategory={currentCategory} selectedCurrency={selectedCurrency}/>
      </div>
  )
}
}


export default App;
