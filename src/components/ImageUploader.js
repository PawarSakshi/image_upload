/*import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import './ImageUploader.css'; // Import the CSS file

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleCameraClick = () => {
    setShowCamera(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log('Error accessing camera:', error);
      });
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      setFiles([...files, blob]);
      setShowCamera(false);
      video.srcObject.getTracks().forEach(track => track.stop());
    }, 'image/jpeg', 1);
  };

  const handleUpload = () => {
    // Placeholder logic for uploading the captured image
    console.log('Uploading image:', files);
  };

  const renderUploadedFiles = () => {
    return files.map((file, index) => (
      <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${file.name}`} className="uploaded-image" />
    ));
  };

  return (
    <div className="image-uploader">
      <Dropzone onDrop={onDrop} multiple={false}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drop your files here or click to browse</p>
            <button onClick={() => document.querySelector('input[type="file"]').click()}>Choose from device</button>
          </div>
        )}
      </Dropzone>
      {!showCamera && (
        <button onClick={handleCameraClick}>Use Device Camera</button>
      )}
      {showCamera && (
        <div className="camera-container">
          <video ref={videoRef} className="camera-preview" autoPlay playsInline />
          <button onClick={handleCapture}>Capture Image</button>
        </div>
      )}
      <div className="upload-section">
        {files.length > 0 && <button onClick={handleUpload}>Upload Image</button>}
        <div className="uploaded-images">{renderUploadedFiles()}</div>
      </div>
    </div>
  );
};

export default ImageUploader;
*/

import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import './ImageUploader.css'; // Import the CSS file

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleCameraClick = () => {
    setShowCamera(true);
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.log('Error accessing camera:', error);
      });
  };

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      setFiles([...files, blob]);
      setShowCamera(false);
      video.srcObject.getTracks().forEach(track => track.stop());
    }, 'image/jpeg', 1);
  };

  const handleUpload = () => {
    // Placeholder logic for uploading the captured image
    console.log('Uploading image:', files);
  };

  const renderUploadedFiles = () => {
    return files.map((file, index) => (
      <img key={index} src={URL.createObjectURL(file)} alt={`Uploaded ${file.name}`} className="uploaded-image" />
    ));
  };

  return (
    <div className="image-uploader-container">
      <div className="image-uploader-content">
        <Dropzone onDrop={onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drop your files here or click to browse</p>
              <button className="upload-button">Choose from device</button>
            </div>
          )}
        </Dropzone>
        {!showCamera && (
          <button className="camera-button" onClick={handleCameraClick}>Use Device Camera</button>
        )}
        {showCamera && (
          <div className="camera-container">
            <video ref={videoRef} className="camera-preview" autoPlay playsInline />
            <button className="capture-button" onClick={handleCapture}>Capture Image</button>
          </div>
        )}
        <div className="upload-section">
          {files.length > 0 && <button className="upload-button" onClick={handleUpload}>Upload Image</button>}
          <div className="uploaded-images">{renderUploadedFiles()}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
