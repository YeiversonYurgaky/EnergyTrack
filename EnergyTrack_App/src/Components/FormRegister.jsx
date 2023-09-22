import React from 'react';
import ButtonRegister from './ButtonRegister';

const FormRegister = () => {
  return (
    <main className="flex justify-center bg-[#52cef5]">
      <div className="flex items-center h-screen justify-center">
        <section className="flex justify-around items-center w-[700px] h-[500px] bg-white border-none rounded-lg shadow-lg overflow-hidden">
          <form className="flex items-center p-2 justify-evenly flex-col bg-white">
            <h1 className="text-4xl text-center flex justify-center items-center text-[#1c4355] font-bold uppercase">
              Registrarse
            </h1>
            <div className="flex justify-evenly flex-col items-end">
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Nombres"
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Apellidos"
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Usuario"
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="email"
                  placeholder="Correo electronico"
                />
              </div>
              <div>
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="password"
                  placeholder="Contraseña"
                />
              </div>
            </div>
            <ButtonRegister label={'Registrarse'} />
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

export default FormRegister;
