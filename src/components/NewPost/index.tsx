import React, { useState } from 'react';
import axios from 'axios';
import { Input, Form, Label, Textarea, Button, Container } from './styles';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      description,
      image
    };

    var storage = JSON.parse(localStorage.getItem('user'));
    axios.post('/api/posts', post, {
      headers: {
        Authorization: `Bearer ${storage.token}`,
      },
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>Title:</Label>
        <Input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Label>Description:</Label>
        <Input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Label>Image:</Label>
        <Input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Label>Content:</Label>
        <Textarea value={content} onChange={(e) => setContent(e.target.value)}/>

        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}

export default CreatePost;
