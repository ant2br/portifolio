import { useEffect, useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';
import toast, { Toaster } from 'react-hot-toast';
import theme from '../../styles/theme';
import axios from 'axios';
import router from 'next/router';

function ProjetoItem() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('user');
        if (token) {
            var user = JSON.parse(token);

            if(user.role === 'admin'){
                router.push('/admin');
            } else {
                router.push('/');
            }
        }
    }, []);



    async function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            console.log('to aqui')
            toast('Preencha todos os campos para enviar sua mensagem!', {
                style: {
                    background: theme.error,
                    color: '#fff'
                }
            });
            return;
        }

        try {
            setLoading(true);

            let response  = await axios.post('https://brener.dev/api/login', {email: email, password: password});

        
            localStorage.setItem('user', JSON.stringify(response.data));


            



            
            

            
        } catch (error) {
            toast(error.response.data.message, {
                style: {
                    background: theme.error,
                    color: '#fff'
                }
            });            
        } finally {
            setLoading(false);
        }
    }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
      <Input
        placeholder="email"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit" disabled={loading}>
      Login
      </button>
    </FormContainer>
    
  );
}

export default ProjetoItem;