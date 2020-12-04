import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import ImageList from './ImageList';
import Header from './Header';
import './App.css';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Data fetch error:', error);
      });
  }, []);

  return (
    <>
    <Header />
    <Container maxWidth="lg">
      <Box mt="20px">
        { images ? <ImageList images={images} /> : <p>Loading...</p> }
      </Box>
    </Container>
    </>
  );
}

export default App;
