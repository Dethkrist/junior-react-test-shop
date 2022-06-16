import React from 'react';
import style from '../styles/Selector.module.scss'

class Selector extends React.Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    const {attribute, id} = this.props
    return( 
      <div className={style.selectorContainer}>
        {attribute.items.map(item =>
        <label key={item.id}>
          <input 
            type="radio" 
            name={id} 
            value={item.value} 
            defaultChecked={attribute.items[0]}/>
          {attribute.type === "swatch" ? 
          <div 
            className={style.colorSwatch} 
            style={{background: item.value}}/> : 
          <div className={style.selector}>{item.value}</div>}
        </label>)}
    </div>
  )}
}

export default Selector;