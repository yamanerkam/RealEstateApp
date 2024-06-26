import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();


    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(formData)
        setLoading(true)

        try {
            const res = await axios.post('http://localhost:3001/api/auth/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password

            }, { withCredentials: true })
            console.log(res)
            navigate("/login");
        }
        catch (error) {
            console.error(error);
            setError(error.response.data.message);


        } finally {
            console.log(error)
            setLoading(false)

        }



    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className='register-page'>
            <form onSubmit={handleSubmit}>
                <h1>Create an Account</h1>
                <input required name='email' value={formData.email} onChange={handleChange} placeholder='Email' type="text" />
                <input required name='username' value={formData.username} onChange={handleChange} placeholder='Username' type="text" />
                <input required name='password' value={formData.password} onChange={handleChange} placeholder='Password' type="password" />
                <button disabled={loading} type='submit'>Register</button>
                <span className='navigate' onClick={() => navigate('/login')}>Already have an account</span>
                {error && <span>{error}</span>}
            </form>
        </div>
    )
}
