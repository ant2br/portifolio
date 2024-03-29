import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import { ButtonContainer, Content, CreatePostButton, ListContainer, PageButton, PostContainer, Title, Image } from './styles';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const router = useRouter();

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
    router.push('/admin/new-post');
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
      
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <Title onClick={() => router.push(`/admin/posts/${post.id}`)}>{post.title}</Title>
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
