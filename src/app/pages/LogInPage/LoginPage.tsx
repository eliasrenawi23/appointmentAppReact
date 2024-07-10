
import React, { useState } from 'react';
import { LoginForm } from './style'
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = () => {
        dispatch(login({
            username,
            password
        }));
        navigate('/analytics'); // Redirect to Analytics page

    };
    return (
        <LoginForm>

            <Container>
                <Typography variant="h4">Login</Typography>
                <TextField
                    id='username'
                    label="username"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id='password'
                    placeholder='password'
                    label="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Container>
        </LoginForm>
    )
}

export default LoginPage