import React, { useState } from 'react';
import './App.css'; // We'll add this CSS below

function Zerodha() {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1 && userId && password) {
      setStep(2);
    } else if (step === 2 && pin.length === 6) {
      alert('Login successful (mock)');
    } else {
      alert('Please fill in all fields correctly');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Zerodha Kite Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {step === 1 ? (
          <>
            <input
              className="login-input"
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <input
            className="login-input"
            type="password"
            placeholder="PIN"
            maxLength={6}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        )}
        <button className="login-button" type="submit">
          {step === 1 ? 'Login' : 'Continue'}
        </button>
      </form>
    </div>
  );
}

export default Zerodha;
