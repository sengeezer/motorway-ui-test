import React, { Component, createRef } from 'react';

import './ImageCard.css';

class ImageCard extends Component {
  constructor (props) {
    super(props);

    this.state = {
      spans: 0
    };

    this.imageRef = createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil((height / 10) + 1);

    this.setState({ spans });
  }
  render() {
    const { description, user, url } = this.props.image;

    return (
      <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          src={url}
          alt={description}
          className="main-image"
          ref={this.imageRef}
        />
        <img src={user.profile_image} alt={user.username} className="profile-image" />
      </div>
    );
  }
}

export default ImageCard;
