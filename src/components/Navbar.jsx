import React from 'react';
import getProducts from '../queries/GetProducts';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }



  render () {
    const {categoriesList, callback} = this.props
    return  (
      <div>
        {categoriesList.map(({name}) => 
        <button
          onClick={() => callback(name)}
          key={name}
          value={name}>
          {name.toUpperCase()}
        </button>)}
      </div>
    )  
  }
}

export default Navbar;