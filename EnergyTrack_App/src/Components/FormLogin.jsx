import React from 'react';
import ButtonLogin from './ButtonLogin';
import '../Styles/Login.css';
import ButtonRegister from './ButtonRegister';
import { useNavigate } from 'react-router-dom';
const FormLogin = () => {
  const navigate = useNavigate();
  const irDashboard = () => {
    navigate('/dashboard');
  };
  const irRegistrar = () => {
    navigate('/register');
  };
  return (
    <main className="main">
      <div className="contenedor">
        <section className="form-container">
          <div className="mensajeBienvenida">
            <h1>Energy Track</h1>
            <p>
              ¡Bienvenidos a <span>Energy Track</span> la platadorma inteligente
              para visualizar y analizar los consumos diarios de iluminación en
              el Bolivar Rave!
            </p>
            <p>
              Encontraras informacion actualizada para potenciar la eficiencia
              energetica de nuestra universidad. Unete a nosotros en este
              emocionante reccorido hacia un campus mas sostenible.
            </p>
            <p>¡Nos complace mucho contar contigo!</p>
          </div>
          <form className="form-signin">
            <h1>Ingresar</h1>
            <div className="contain-inputs">
              <div className="mb-3">
                <input type="text" placeholder="Usuario" />
              </div>
              <div>
                <input type="password" placeholder="Contraseña" />
              </div>
              <a
                className="password-recover"
                href="http://localhost:5173/forgotpassword"
              >
                Recuperar contraseña
              </a>
            </div>
            <ButtonLogin fnIniciarSesion={irDashboard} label={'Ingresar'} />
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <ButtonRegister fnRegistarse={irRegistrar} label={'Registrarse'} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default FormLogin;
