import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div `display: flex; flex-wrap: wrap; align-items: center; background-color: #11172B; color: #63E2B4; padding: 30px;`

const PostContainer = styled.div `width: 80%; background-color: #1E253E; color: #63E2B4; border: 1px solid #65E8B8; border-radius: 7px; padding: 10px; margin-bottom: 20px;`;

const Title = styled.h3 `font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;`;

const Description = styled.p `font-size: 1.2rem; margin-bottom: 10px;`;

const Image = styled.img `width: 100%; max-width: 400px; margin-bottom: 10px;`;

const Content = styled.p `font-size: 1.2rem;`;

const Posts = () => {
const [posts, setPosts] = useState([]);

useEffect(() => {
    var storage = JSON.parse(localStorage.getItem('user'));

axios.get('/api/posts', {headers: {Authorization: `Bearer ${storage.token}`,}}).then((res) => {
setPosts(res.data.posts);
});
}, []);

return (
<ListContainer>
{posts.map((post) => (
<PostContainer key={post.id}>
<Title>{post.title}</Title>
<Image src={post.image} alt={post.title} />
<Content>{post.content}</Content>
</PostContainer>
))}
</ListContainer>
);
};

export default Posts;