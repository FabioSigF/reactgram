import './Auth.scss';
//Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message';
//Hooks
import { useState, useEffect } from 'react';

//Redux
import { register, reset } from '../../slices/authSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch(); //permite usar funções redux
  
  //useSelector permite extrair estados do authSlice
  const { loading, error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user);
    dispatch(register(user));
  }

  //Clean all auth states
  useEffect(() => {
    dispatch(reset()); //sempre que o dispatch for usado, resetamos o dispatch para nova requisição
  }, [dispatch])

  return (
    <div className='register'>
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome'
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input type="email" placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input type="password" placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        <input type="password" placeholder='Confirme a senha'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword || ""}
        />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde..." disabled />}
        {error && <Message msg={error} type="error" />}  
      </form>
      <p>Já possui conta? <Link to={"/login"}>Clique aqui.</Link></p>
    </div>
  )
}
