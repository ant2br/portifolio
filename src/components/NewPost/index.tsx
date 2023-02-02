import React, { useState } from 'react';
import axios from 'axios';
import { Input, Form, Label, Textarea, Button, Container } from './styles';
import toast, { Toaster } from 'react-hot-toast';
import Router from 'next/router';

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
    }).then((res) => {
      toast(res.data.message, {
        style: {
            background: '#00FF3C',
            color: '#fff'
        }
    });  

    Router.push('/admin/posts')
    }).catch((err) => {
      toast(err.response.data.message, {
        style: {
            background: '#FF0000',
            color: '#fff'
        }
    });
    });
  }

  return (
    <Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
        />
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
