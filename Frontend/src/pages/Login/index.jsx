import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./styles.css";


export default function Login() {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [cookies, setCookies] = useCookies();
  const navigate = useNavigate();
  async function login(){
    axios.post("https://trip-tide.onrender.com/api/user/login", {email, password}).then((response)=>{
        console.log(response)
        setCookies("auth_token", response.data.data)
        navigate("/define-user")
    })
  }
  return (
    <div className="card">
      <div className="card-content">
        <h2>LOGIN</h2>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          className="input-field"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          variant="filled"
          className="input-field"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Button variant="outlined" onClick={login}>
          Log in
        </Button>
      </div>
    </div>
  );
}