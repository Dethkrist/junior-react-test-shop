import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getCategoriesList } from './utils/data_loading/allQueries';
import { loadData } from './utils/data_loading/loadData';
import Navbar from './components/navbar/Navbar';
import Category from './Pages/Category';
import ProductPage from './Pages/ProductPage';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      categoriesList: [],
      defaultCategory : '',
      selectedCurrency: 'USD'
    }
    this.fetchStart = this.fetchStart.bind(this)
  }



  async fetchStart() {
    const query = getCategoriesList()
    const data = await loadData(query)
    const result = data.categories
    const startCategory = result[0].name
    this.setState({
      categoriesList: result, 
      defaultCategory: startCategory
    })
  }


  componentDidMount() {
    this.fetchStart()
}



  render () {
    const {defaultCategory, selectedCurrency, categoriesList} = this.state
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar categoriesList={categoriesList}/>
          <Switch>
            <Route exact path='/'>
                <Redirect to={`/${defaultCategory}`}/>
            </Route>
            <Route exact path={`/:category`}>
              {({match}) => 
                <Category 
                  match={match} 
                  defaultCategory={defaultCategory} 
                  selectedCurrency={selectedCurrency}
                />}  
            </Route>
            <Route exact path={`/:category/:id`}>
              {({match}) => 
                <ProductPage 
                  match={match} 
                  selectedCurrency={selectedCurrency}/>}
            </Route>
          </Switch> 
        </BrowserRouter>  
      </div>
  )
}
}


export default App;
