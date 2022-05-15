import React from 'react';
import Navbar from './components/Navbar';
import { CATEGORIES_LIST, PRODUCTS_LIST } from "./queries/QueriesList"
import QueryWrapper from './queries/QueryWrapper';
import './App.css';
import Products from './components/Products';

const NavbarWithQuery = QueryWrapper(CATEGORIES_LIST, Navbar)
const ProductsWithQuery = QueryWrapper(PRODUCTS_LIST, Products)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      currentCategory : 'all'
    }
    this.setCategory = this.setCategory.bind(this)
  }

  setCategory = (name) => {
    this.setState({currentCategory: name})
  }

  render () {
    console.log(this.state.currentCategory)
    return (
      <div>
        <NavbarWithQuery callback={this.setCategory}/>
        <ProductsWithQuery currentCategory={this.state.currentCategory}/>
      </div>
    )
  }
}


export default App;
