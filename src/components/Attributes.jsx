import React from 'react';
import Selector from './elements/Selector';
import style from './styles/Attributes.module.scss'

class Attributes extends React.Component {
  constructor(props) {
    super(props)
    this.createAttributes = this.createAttributes.bind(this)
  }

  createAttributes() {
    const {attributes} = this.props;
      return attributes && attributes.map(attribute =>
        <div key={attribute.id}>
          <h4 className={style.attributeName}>
            {attribute.name.toUpperCase()}
          </h4>
          <Selector
            id={attribute.id}
            attribute={attribute}/>
        </div>
  )
}


  render() {
    const {brand, description, inStock, name, prices} = this.props;
    return(
      <div className={style.productContainer}>
        <div className={style.nameBrandContainer}>
          <h2 className={style.brand}>{brand}</h2>
          <h3 className={style.name}>{name}</h3>
        </div>
        <div>
          {this.createAttributes()}
        </div>
      </div>
    )
  }
}

export default Attributes;
