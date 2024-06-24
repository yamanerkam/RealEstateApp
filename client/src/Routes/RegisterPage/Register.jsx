import React, { useState } from 'react'
import './Register.css'
export default function Register() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            email: '',
            username: '',
            password: ''
        })

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className='register-page'>
            <form onSubmit={handleSubmit}>
                <input required name='email' value={formData.email} onChange={handleChange} placeholder='Email' type="text" />
                <input required name='username' value={formData.username} onChange={handleChange} placeholder='Username' type="text" />
                <input required name='password' value={formData.password} onChange={handleChange} placeholder='Password' type="password" />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}