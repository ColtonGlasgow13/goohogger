import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import './SubmitButton.css'
import './AuthForm.css'

const AuthForm = ({ title, mode, onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      let userCredential;
      if (mode === 'signIn') {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        onSignIn(userCredential.user);
      } else if (mode === 'signUp') {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        throw new Error('Invalid mode');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`${mode}-form`}>
      <h2>{title}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">{mode === 'signIn' ? 'Sign In' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
