import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react";
import axios from "axios";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  function login (e){
    e.preventDefault();

    axios.post("http://localhost:5000/login", {email, password})
      .then()
      .catch()
  }
  return (
    <SingInContainer>
      <form onSubmit={login}>
        <MyWalletLogo />
        <input placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
         type="email" />
        <input placeholder="Senha" 
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        autocomplete="new-password" />
        <button>Entrar</button>
      </form>

      <Link>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
