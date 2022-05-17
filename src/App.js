import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Products from './components/Products';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentCategory : 'none',
      selectedCurrency: 'USD'
    }
    this.fetchProducts = this.fetchProducts.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
  }


  fetchProducts(name) {
    const {data} = this.props
    const selectedProducts = data.categories.find((category) => {
      return category.name === name
    })
      this.setState({currentCategory: selectedProducts})
  }

  selectCategory(name) {
    this.fetchProducts(name)
  }

  componentDidMount() {
    this.fetchProducts('all')
  }

  render () {
    if (this.state.currentCategory == 'none') {
      return <h1>LOADING</h1>
    } return (
      <div className="container">
        <Navbar data={this.props.data.categories} callback={this.selectCategory}/>
        <Products currentCategory={this.state.currentCategory} selectedCurrency={this.state.selectedCurrency}/>
      </div>
    )
  }
}


export default App;
