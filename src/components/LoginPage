import React, { useState } from "react";



const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
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

    
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginPage;