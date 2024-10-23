import React, { useState } from "react";
import style from './style.module.css';
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import HorizontalLine from "../../components/HorizontalLine";
import { login } from "../../services/authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      navigate('/tasks');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style['login-container']}>
      <form onSubmit={handleSubmit} className={style['login-form']}>
        <div className={style['logo-container']}>
          <Logo />
        </div>
        <Input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="E-mail"
          type="email"
          required
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Senha"
          type="password"
          required
        />
        <Button variant="primary" type="submit">
          Continuar
        </Button>
        <HorizontalLine />
        <Button
          onClick={() => navigate('/signup')}
          variant="secondary"
          type="button"
        >
          Crie uma conta!
        </Button>
        <div className={style['style-signup']}>
          <h4>Não tem uma conta?
            Inscreva-se</h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
