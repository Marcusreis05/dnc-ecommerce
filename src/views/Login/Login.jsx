import './index.scss'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom';



const Login = () => {

  return (
    <div>
      <Header/>
        <section className='divMain'>

          <div className='divheader'>
            <h1>Acesse com seu login ou cadastre-se!</h1>
            <p>você pode entrar com seu CPF</p>
          </div>

          <div className='divForm'>
            <label htmlFor="">Digite seu CPF:</label>
            <input type="text" placeholder='Nome completo'/>
            <br />
            <label htmlFor="">Senha:</label>
            <input type="password" placeholder='Sua senha'/> 
            <br/>
            <Link to={"/home"}><button type="submit">Entrar</button></Link>
          </div>
          
          
        </section>  
    </div>
  )
}

export default Login;