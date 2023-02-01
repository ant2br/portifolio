
import styled from 'styled-components';


export const ListContainer = styled.div `display: flex; flex-wrap: wrap; align-items: center; background-color: #11172B; color: #63E2B4; padding: 30px;`

export const PostContainer = styled.div `width: 80%; background-color: #1E253E; color: #63E2B4; border: 1px solid #65E8B8; border-radius: 7px; padding: 10px; margin-bottom: 20px;`;

export const Title = styled.h3 `font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;`;

export const Description = styled.p `font-size: 1.2rem; margin-bottom: 10px;`;

export const Image = styled.img `width: 100%; max-width: 400px; margin-bottom: 10px;`;

export const Content = styled.p `font-size: 1.2rem;`;

export const CreatePostButton = styled.button`
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

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;

export const PageButton = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;