// eslint-disable-next-line no-unused-vars
import React from 'react';
import ButtonLogin from './ButtonLogin';
import '../Styles/Login..css';
const LoginForm = () => {
  return (
    <main className="main">
      <div className="contenedor">
        <section className="form-container">
          <form className="form-signin">
            <h1>Iniciar Sesión</h1>
            <div className="my-14 mx-0">
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <ButtonLogin label={'Ingresar'} />
          </form>
          <div className="mensajeBienvenida">
            <p>
              ¡Bienvenidos a <span>EnergryTrack UNAC</span> la plataforma para
              visualizar y analizar los consumos diarios de iluminación en el
              Bolivar Rave!
            </p>
            <p>
              Aquí encontrarás información actualizada para potenciar la
              eficiencia energética de nuestra universidad. Únete a nosotros en
              este emocionante recorrido hacia un campus más sostenible.
            </p>
            <p>¡Nos complace mucho contar contigo!</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginForm;
