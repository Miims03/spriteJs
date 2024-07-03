// App.js
import React, { useState } from 'react';
import axios from 'axios';

function test() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setFileName(e.target.value);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('filename', fileName);

    try {
      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setImageUrl(response.data.url);
    } catch (error) {
      console.error('Error uploading the file:', error);
    }
  };
  return (
    <div className='text-white'>
      <h1>Upload an Image</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default test;
