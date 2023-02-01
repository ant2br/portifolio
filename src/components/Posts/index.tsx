import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div `display: flex; flex-wrap: wrap; align-items: center; background-color: #11172B; color: #63E2B4; padding: 30px;`

const PostContainer = styled.div `width: 80%; background-color: #1E253E; color: #63E2B4; border: 1px solid #65E8B8; border-radius: 7px; padding: 10px; margin-bottom: 20px;`;

const Title = styled.h3 `font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;`;

const Description = styled.p `font-size: 1.2rem; margin-bottom: 10px;`;

const Image = styled.img `width: 100%; max-width: 400px; margin-bottom: 10px;`;

const Content = styled.p `font-size: 1.2rem;`;

const CreatePostButton = styled.button`
    background-color: #63E2B4;
    color: #11172B;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
        background-color: #4DB6AC;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Posts = () => {
const [posts, setPosts] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);




useEffect(() => {
    var storage = JSON.parse(localStorage.getItem('user'));

axios.get(`/api/posts?page=${currentPage}`, {headers: {Authorization: `Bearer ${storage.token}`,}}).then((res) => {
setPosts(res.data.posts);
});
}, []);

const handleCreateNewPost = () => {
    //history.push('/new-post');
}


const handleChangePage = () => {
    var storage = JSON.parse(localStorage.getItem('user'));

    axios.get(`/api/posts?page=${currentPage}`, {headers: {Authorization: `Bearer ${storage.token}`,}}).then((res) => {
    setPosts(res.data.posts);
    });
}

return (
<ListContainer>
      <ButtonContainer>
        <CreatePostButton onClick={handleCreateNewPost}>
          Criar Novo Post
        </CreatePostButton>
      </ButtonContainer>
      {currentPosts.map((post) => (
        <PostContainer key={post.id}>
          <Title>{post.title}</Title>
          <Image src={post.image} alt={post.title} />
          <Content>{post.content}</Content>
        </PostContainer>
      ))}
      <PageButton onClick={ async () => {await paginate(currentPage - 1); handleChangePage() }}>Anterior</PageButton>
      <PageButton onClick={async () => { await paginate(currentPage + 1); handleChangePage()}}>Próximo</PageButton>
    </ListContainer>
);
};

export default Posts;