import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Upload() {
    const [file, setFile] = React.useState("");

    function handleUpload(e) {
        // setFile(event.target.files[0]);
    }

    function handleUploadPage(event) {
        setFile(event.target.files[0]);
    
        // Add code here to upload file to server
        // ...
      }

  return (
    <>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Upload</h2>
        <Form onSubmit={handleUpload}>
          <Form.Group id="topics">
            <Form.Label>Topics</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group id="year">
            <Form.Label>Year</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group id="subtopic">
            <Form.Label>Subtopic</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <div id="upload-box">
          <input type="file" onChange={handleUploadPage} />
          <Form.Group id="filename">
            <Form.Label>FileName</Form.Label>
            <Form.Control type="text" value={file.name} required />
          </Form.Group>
          <Form.Group id="filetype">
            <Form.Label>FileType</Form.Label>
            <Form.Control type="text" value={file.type} required />
          </Form.Group>
          <Form.Group id="filesize">
            <Form.Label>FileSize in Bytes</Form.Label>
            <Form.Control type="text" value={file.size}  required />
          </Form.Group>
          {/* <p>Filename: {file.name}</p>
          <p>File type: {file.type}</p>
          <p>File size: {file.size} bytes</p> */}
         {file && <ImageThumb image={file} />}
         </div>
          <Button className="w-100" type="submit">
            Upload
          </Button>
        </Form>
        </Card.Body>
    </Card>
  </>
  )
}


const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
  };