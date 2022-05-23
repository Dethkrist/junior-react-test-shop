import React from 'react';
import style from './styles/Gallery.module.scss'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  showImage() {
    return <img src={this.props.gallery[0]}/>
  }

  render() {
    if(this.props.gallery !== undefined) {
    return(
      <div className={style.bigPicture}>
        {this.showImage()}
      </div>
      )
    }
  }
}


export default Gallery;