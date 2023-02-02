import axios from 'axios';

function Page({ initialData }) {
  return <div>{initialData}</div>;
}

Page.getInitialProps = async function(query) {
  const storage = JSON.parse(localStorage.getItem('user'));
    
  const response = await axios.get(`/api/posts/${query.id}`, {
    headers: {
        Authorization: `Bearer ${storage.token}`,
    },
  });
  const initialData = response.data.post;

  return { initialData };
}

export default Page;