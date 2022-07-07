import React from 'react';
import style from '../styles/components/Gallery.module.scss'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigImageIndex: 0,
    }
    this.createGallery = this.createGallery.bind(this)
  }


changeMainImage(index) {
  this.setState({bigImageIndex: index})
}

createGallery() {
  const {gallery} = this.props
  const gl = gallery.length;
  if (gl === 1) {
    return 
  } else {
      return gallery && gallery.map((item, index) =>
        <li 
          key={item} 
          className={this.state.bigImageIndex === index ? 
          `${style.smallPicture} ${style.selected}`: 
          style.smallPicture}
        >
          <img 
            onClick={() => this.changeMainImage(index)} 
            src={item} 
            alt="#"
          />
        </li> 
      )
  }
}


  render() {
    const {gallery} = this.props
    const {bigImageIndex} = this.state
    if(gallery !== undefined) {
    return(
        <div className={style.galleryContainer}>
          <ul className={style.galleryList}>
            {this.createGallery()}
          </ul>
          <div className={style.bigPicture}>
            <img src={gallery[bigImageIndex]} alt="#"/>
          </div>
        </div>
      )
    }
  }
}


export default Gallery;