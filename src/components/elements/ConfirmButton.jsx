import React from 'react';
import style from '../../styles/elements/ConfirmButton.module.scss'

class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {text, disabled} = this.props;
    return (
      <div>
        <button 
          disabled={disabled} 
          className={style.confirmButton}
        >{text}</button>
      </div>
    )
  }
}

export default ConfirmButton;