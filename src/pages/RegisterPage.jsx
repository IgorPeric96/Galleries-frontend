import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserRequest } from '../store/auth/actions';

export const RegisterPage = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirm_password) {
            alert("Passwords do not match.");
            return;
        }
        // dodati dodatnu validaciju ako je potrebno
        dispatch(registerUserRequest({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password
       
        }));
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        name="first_name"
                        value={formData.first_name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="last_name"
                        value={formData.last_name} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirm_password"
                        value={formData.confirm_password} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};
