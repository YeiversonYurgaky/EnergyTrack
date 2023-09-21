import React from 'react';
import forgotPass from '../assets/forgotpass.svg';
import ButtonResetPassword from './ButtonResetPassword';
const ForgotPassword = () => {
  return (
    <main className="flex justify-center bg-[#52cef5]">
      <div className="flex items-center h-screen justify-center">
        <section className="flex w-[800px] h-[500px] bg-white border-none rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-center relative flex-1">
            <img
              className="w-96 h-auto flex justify-center items-center absolute top-16 left-20"
              src={forgotPass}
              alt="forgotPass"
            />
          </div>
          <form className="flex items-center p-2 justify-evenly flex-col flex-1 bg-white">
            <h1 className="text-4xlxl text-center flex justify-center items-center text-[#1c4355] font-bold uppercase">
              Recuperar Contraseña
            </h1>
            <div className="flex justify-evenly flex-col items-end">
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="email"
                  placeholder="Correo Electronico"
                />
              </div>
            </div>
            <ButtonResetPassword label={'Cambiar contraseña'} />
            <a
              className="text-lg text-gray-500 mt-1 no-underline flex hover:text-[#1c4355] hover:underline"
              href="http://localhost:5173/"
            >
              Volver al Inicio de sesión
            </a>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ForgotPassword;
