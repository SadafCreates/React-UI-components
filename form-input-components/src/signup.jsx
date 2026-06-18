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

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.role) newErrors.role = 'Role is required';
        if (!formData.agree) newErrors.agree = 'You must agree to the terms';
        return newErrors;
    }

const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission (e.g. send to API)
    const newErrors= validate();
    if(Object.keys(newErrors).length === 0){
        setSubmitted(true);
        setErrors({});
    } else {
        setErrors(newErrors);
        setSubmitted(false);
    }
}

return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="formset">
                        <label>Name:</label>
                        <input type="text" name='name' value={formData.name}  onChange={handleChange}/>
                        {errors.name && <span className='error'>{errors.name}</span>}
                    </div>
                    <div className='formset'>
                        <label>Email:</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} />
                        {errors.email && <span className='error'>{errors.email}</span>}
                    </div>
                    <div className="formset">
                        <label>Password:</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange} />
                        {errors.password && <span className='error'>{errors.password}</span>}
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
                            {errors.role && <span className='error'>{errors.role}</span>}
                    </div>
                    <div className="formset">
                        <label>
                            <input type="checkbox" name="agree" value={formData.agree} onChange={handleChange} />
                            I agree to the terms and conditions.
                        </label>
                        {errors.agree && <span className='error'>{errors.agree}</span>}
                    </div>
                    
                    <button type='submit' onClick={handleSubmit} className='submitButton'>Submit</button>
                    {submitted && alert('Form submitted successfully!')}
                </form>
            </div>
        </>
    )
}

export default SignUp;