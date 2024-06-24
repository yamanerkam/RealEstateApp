import React, { useState } from 'react'
import './LoginPage.css'
export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            username: '',
            password: ''
        })
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
