import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../firebase';

function Signup() {
    const auth = getAuth(app);

    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [loading,setLoading] = useState<boolean>(false);

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        await createUserWithEmailAndPassword(auth,email,password)
        // setLoading(false);
        alert("Success!");
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };

    const inputStyle = {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    };
 
    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit} style={formStyle}>
                <h2>Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyle}
                    required
                />
                <button type="submit" style={buttonStyle}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
