import logo from "../../assets/room_logo.jpeg";
import Input from "../../components/Input";
import { useState } from "react";
import Button from "../../components/Button";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authentication";
import { validatePassword } from "../../services/validation";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validate = validatePassword;

  const handleSubmitSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate(password)) {
      setPasswordError(
        "A senha deve ter mais de 6 caracteres, com letras maiúscula e minúscula, pelo menos um número e um caracter especial."
      );
      return;
    }

    try {
      await signup({ name, email, password });

      navigate("/tasks");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className={style["signup-container"]}>
        <div className={style["form-wrapper"]}>
          <img src={logo} alt="Logo" className={style["logo"]} />
          <h1>Olá, boas vindas ao Room Company ;)</h1>
          <form onSubmit={handleSubmitSignup} className={style["signup-form"]}>
            <Input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Nome"
              type="text"
              required
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="E-mail"
              type="email"
              required
            />
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                setPasswordError("");
              }}
              placeholder="Senha"
              type="password"
              required
            />
            {passwordError && (
              <div className={style["error-message"]}>
                <p>{passwordError}</p>
              </div>
            )}
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
