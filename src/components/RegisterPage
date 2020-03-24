import React, { useState } from "react";
// import "./styles.css";


const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  return (
    <form>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
  
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <input
        value={password_confirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        placeholder="Password Confirmation"
        type="password"
        name="password"
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
}
export default RegistrationPage;