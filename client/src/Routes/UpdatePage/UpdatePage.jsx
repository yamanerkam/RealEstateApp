import React, { useState, useContext, useEffect } from 'react'
import './UpdatePage.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import noavatar from '../../../src/assets/noavatar.jpg'
import axios from 'axios';
import UploadWidget from '../../Components/UploadWidget/uploadWidget.jsx';

export default function UpdatePage() {
    const navigate = useNavigate();
    const { currentUser, updateUser } = useContext(AuthContext)

    const [avatar, setAvatar] = useState([]);
    useEffect(() => {
        console.log(avatar)
    }, [avatar])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        console.log(currentUser.id)
        try {
            const res = await axios.put(`http://localhost:3001/api/user/${currentUser.id}`, {
                username, email, password, avatar: avatar[0]
            }, { withCredentials: true })
            updateUser(res.data)
            console.log(res)
            navigate('/profile')
        } catch (error) {
            setError(error.response.data.msg)
            console.log(error)
        } finally {
            setLoading(false)
        }


    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div className='update-page'>
            <form onSubmit={handleSubmit}>
                <h1>Update the account</h1>
                <label htmlFor="email">Email</label>
                <input required name='email' defaultValue={currentUser.email} onChange={handleChange} placeholder='Email' type="text" />
                <label htmlFor="username">Username</label>
                <input required name='username' defaultValue={currentUser.username} onChange={handleChange} placeholder='Username' type="text" />
                <label htmlFor="password">Password</label>
                <input name='password' value={formData.password} onChange={handleChange} placeholder='Password' type="password" />
                <button disabled={loading} type='submit'>Update</button>
                {error && <span>{error}</span>}
            </form>
            <div className="image-container">
                <img src={avatar[0] || currentUser.avatar || noavatar} alt="User Avatar" />
                <UploadWidget uwConfig={{
                    cloudName: "dccx055uf",
                    uploadPreset: "estate",
                    multiple: false,
                    maxImageFileSize: 2000000,
                    folder: "avatars",
                }}
                    setState={setAvatar}
                />
            </div>
        </div>
    )
}
