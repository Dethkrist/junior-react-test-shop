import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Category from './Pages/Category';
import getCategoriesList from './queries/GetCategoriesList';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ProductPage from './Pages/ProductPage';


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



  async  fetchStart() {
    const result = await getCategoriesList()
    const startCategory = result[0].name
    this.setState({categoriesList: result, defaultCategory: startCategory})
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
            <Route exact path={`/:category`}>{({match}) => 
              <Category match={match} selectedCurrency={selectedCurrency}/>}  
            </Route>
            <Route exact path={`/:category/:id`}>{({match}) => 
              <ProductPage match={match} selectedCurrency={selectedCurrency}/>}
            </Route>
          </Switch> 
        </BrowserRouter>  
      </div>
  )
}
}


export default App;
