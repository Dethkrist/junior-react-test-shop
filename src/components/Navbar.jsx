import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categoriesList: [],
    }
    this.selectCategory = this.selectCategory.bind(this)
  }

  fetchCategories() {
    const {data} = this.props
    data.categories.map(({name}) => {
      this.setState(prevState => ({
        categoriesList: [...prevState.categoriesList, name],
      }));
    })
  }

  selectCategory = (name) => {
    this.props.callback(name)
  }

  componentDidMount() {
    this.fetchCategories()
  }

  render () {
    const {categoriesList} = this.state
    return (
      <div>
        {categoriesList.map((name) => 
        <button
          onClick={() => this.selectCategory(name)}
          key={name}>
          {name.toUpperCase()}
        </button>)}
      </div>
    )  
  }
}

export default Navbar;