import React from 'react';
import style from '../../styles/elements/Selector.module.scss'

class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: {},
    }
    this.ref = React.createRef()
  }

  componentDidMount() {
    const input = this.ref.current
    this.setState({checked: {name: input.name, value: input.value}})
  }

  // handleChange = (e) => {
  //   const {changeAttribute} = this.props
  //   const select = {name: e.target.name, value: e.target.value}
  //   console.log(select)
  //   changeAttribute(select)
  // }

  render() {
    const {attribute, id} = this.props;
    return( 
      <div className={style.selectorContainer}>
        {attribute.items.map(item =>
        <label key={item.id}>
          <input 
            type="radio" 
            name={id} 
            ref={this.ref}
            onClick={this.handleChange}
            value={item.value} 
            defaultChecked={attribute.items[0].id}
          />
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