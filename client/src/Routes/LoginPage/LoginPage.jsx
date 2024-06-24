import React, { useState } from 'react'
import './LoginPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://localhost:3001/api/auth/login', {
                username: formData.username,
                password: formData.password
            }, { withCredentials: true })

            localStorage.setItem('user', JSON.stringify(res.data))
            navigate('/')
        } catch (error) {
            console.error('There was an error registering!', error);

        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
                <input required name='username' onChange={handleChange} value={formData.username} placeholder='Username' type="text" />
                <input required name='password' onChange={handleChange} value={formData.password} placeholder='Password' type="password" />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
