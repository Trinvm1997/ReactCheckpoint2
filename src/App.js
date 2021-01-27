import Form from "./Components/Form";
import Title from "./Components/Title";
import Grid from "./Components/Grid";
import Modal from "./Components/Modal";
import React, { useState } from 'react';


function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <Form />
      <Grid setSelectedImage={setSelectedImage} />
      { selectedImage && (<Modal 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} />) 
      }
    </div>
  );
}

export default App;
