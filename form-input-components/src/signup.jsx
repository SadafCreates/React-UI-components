import React, { useState } from 'react';
import './Signup.css'; 

function SignUp(){
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        agree: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g. send to API)
    console.log('Submitted', formData);
}

return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formset">
                        <label>Name:</label>
                        <input type="text" name='name' value={formData.name}  onChange={handleChange}/>
                    </div>
                    <div className='formset'>
                        <label>Email:</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="formset">
                        <label>Password:</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="formset">
                        <label>Role:</label>
                        <select name='role' value={formData.role} onChange={handleChange}>
                            <option value="">Select Role</option>
                            <option value="Student">Student</option>
                            <option value="Senior Developer">Senior Developer</option>
                            <option value="Junior Developer">Junior Developer</option>
                            <option value="Intern">Intern</option>
                            </select>
                    </div>
                    <div className="formset">
                        <label>
                            <input type="checkbox" name="agree" value={formData.agree} onChange={handleChange} />
                            I agree to the terms and conditions.
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;