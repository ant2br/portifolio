import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ButtonContainer, Content, CreatePostButton, ListContainer, PageButton, PostContainer, Title, Image } from './styles';

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
    const storage = JSON.parse(localStorage.getItem('user'));
    const headers = {
      Authorization: `Bearer ${storage.token}`,
    };

    axios
      .get(`/api/posts?page=${currentPage}`, { headers })
      .then((res) => {
        setPosts(res.data.posts);
      });
  }, [currentPage]);

  const handleCreateNewPost = () => {
    //history.push('/new-post');
  };

  const handleChangePage = () => {
    const storage = JSON.parse(localStorage.getItem('user'));
    const headers = {
      Authorization: `Bearer ${storage.token}`,
    };

    axios
      .get(`/api/posts?page=${currentPage}`, { headers })
      .then((res) => {
        setPosts(res.data.posts);
      });
  };

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
      <PageButton
        onClick={() => {
          paginate(currentPage - 1);

        }}
        disabled={currentPage === 1}
      >
        Anterior
      </PageButton>
      <PageButton
        onClick={() => {
          paginate(currentPage + 1);

        }}
      >
        Próximo
      </PageButton>
    </ListContainer>
  );
};

export default Posts;
