import React, { useEffect, useState } from 'react';
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
    <div className="ui container App">
      { images ? <ImageList images={images} /> : <p>Loading...</p> }
    </div>
  );
}

export default App;
