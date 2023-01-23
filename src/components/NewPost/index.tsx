import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // import the styles
import axios from 'axios';
import dynamic from "next/dynamic";
import { Input } from './styles';
import { backgrounds } from 'polished';
import TinyMCE from 'react-tinymce';



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
  axios.post('/api/posts', post).then((res) => {
  console.log(res);

  });
}

const style = {
    editor: {
      backgroundColor: '#1E253E',
      color: '#63E2B4',
      border: '1px solid #65E8B8',
      borderRadius: '7px',
      padding: '10px',
      marginBottom: '20px'
    }
  };
const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#11172B',
      color: '#63E2B4',
      padding: '30px'
    },
    form: {
      width: '80%'
    },
    input: {
      backgroundColor: '#1E253E',
      color: '#63E2B4',
      border: '1px solid #65E8B8',
      borderRadius: '7px',
      padding: '10px',
      marginBottom: '20px'
    },
    button: {
      backgroundColor: '#65E8B8',
      color: '#1E253E',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '7px',
      marginTop: '20px'
    },
    quill: {
      backgroundColor: '#1E253E',
      color: '#63E2B4',
      borderRadius: '7px'
    }
    }
return (
<div style={styles.container}>
<form style={styles.form} onSubmit={handleSubmit}>
<label>Title:</label>
<input
type='text'
value={title}
onChange={(e) => setTitle(e.target.value)}
style={styles.input}
/>
<label>Description:</label>
<input
type='text'
value={description}
onChange={(e) => setDescription(e.target.value)}
style={styles.input}
/>
<label>Image:</label>
<input
type='text'
value={image}
onChange={(e) => setImage(e.target.value)}
style={styles.input}
/>
<label>Content:</label>
<textarea />
<button type='submit' style={styles.button}>Submit</button>
</form>
</div>
)


}

export default CreatePost;