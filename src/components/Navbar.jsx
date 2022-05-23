import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render () {
    const {categoriesList} = this.props
    return  (
      <div  className="navbar">
        {categoriesList.map(({name}) => 
        <NavLink
          className="navbar__link"
          to={`/${name}`}
          key={name}>
          {name.toUpperCase()}
        </NavLink>)}
      </div>
    )  
  }
}

export default Navbar;