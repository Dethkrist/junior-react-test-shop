import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getCategoriesList } from "./utils/data_loading/allQueries";
import dataLoader from "./utils/data_loading/dataLoader";
import Navbar from "./components/navbar/Navbar";
import Category from "./Pages/Category";
import ProductPage from "./Pages/ProductPage";
import "./App.scss";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      defaultCategory: "",
    };
    this.fetchStart = this.fetchStart.bind(this);
  }

  async fetchStart() {
    const query = getCategoriesList();
    const data = await dataLoader(query);
    const result = data.categories;
    const startCategory = result[0].name;
    this.setState({
      categoriesList: result,
      defaultCategory: startCategory,
    });
  }

  componentDidMount() {
    this.fetchStart();
  }

  render() {
    const { defaultCategory, categoriesList } = this.state;
      return (
        <div className="wrapper">
          <BrowserRouter>
            <Navbar categoriesList={categoriesList} />
            <Switch>
              <Route exact path="/">
                <Redirect to={`/${defaultCategory}`} />
              </Route>
              <Route exact path={`/:category`}>
                {({ match }) => (
                  <Category
                    match={match}
                    defaultCategory={defaultCategory}
                  />
                )}
              </Route>
              <Route exact path={`/:category/:id`}>
                {({ match }) => (
                  <ProductPage
                    match={match}
                  />
                )}
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      );
}}




export default App;
