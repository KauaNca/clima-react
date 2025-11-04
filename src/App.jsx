import { useState } from "react";
import InputClima from "./components/Input.jsx";
import Botao from "./components/Button.jsx";

function App() {
  return (
    <div className="flex justify-center items-start h-screen bg-blue-50">
      <div className="w-1/2 m-8 flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl font-bold">Clima Tempo Real</h1>
        <span className="text-lg text-gray-500 m-3" >Consulte o clima em qualquer cidade do mundo</span>
        <div className="flex items-center justify-center gap-2 w-4/5 m-8">
          <InputClima />
          <Botao />
        </div>
        <div className="m-3">
          <span className="text-lg text-gray-500">Digite o nome de uma cidade para começar</span>
        </div>
      </div>
    </div>
  );
}

export default App;
