import React from 'react';
import ButtonLogin from './ButtonLogin';
import '../Styles/Login.css';
const FormLogin = () => {
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
              <a className="password-recover" href="#">
                Recuperar contraseña
              </a>
            </div>
            <ButtonLogin label={'Ingresar'} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default FormLogin;
