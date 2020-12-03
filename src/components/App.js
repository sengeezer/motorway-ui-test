import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import ImageList from './ImageList';
import './App.css';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      { images ? <ImageList images={images} /> : <p>Loading...</p> }
    </Container>
  );
}

export default App;
