import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyWalletLogo from "../components/MyWalletLogo";
import axios from "axios";
import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigate = useNavigate();
  function signup(e) {
    e.preventDefault();
    
    if(password != confirmPassword) return alert("As senhas não são as mesmas!")

    axios
      .post("http://localhost:5000/cadastro", {name, email, password})
      .then((res) => navigate("/"))
      .catch((err) => alert(err.response.data));
  }
  return (
    <SingUpContainer>
      <form onSubmit={signup}>
        <MyWalletLogo />
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value) }
          type="text"
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value) }
          type="email"
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value) }
          autocomplete="new-password"
        />
        <input
          placeholder="Confirme a senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value )}
          autocomplete="new-password"
        />
        <button>Cadastrar</button>
      </form>

      <Link>Já tem uma conta? Entre agora!</Link>
    </SingUpContainer>
  );
}

const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
