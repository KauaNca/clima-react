import { useRef, useState } from "react";
import InputClima from "./components/Input.jsx";
import Botao from "./components/Button.jsx";

function App() {
  const [dados, setDados] = useState(null);

  async function handleClick() {
    let cidade = inputRef.current.input.value;
    cidade = cidade.trim();
    if (!cidade) {
      alert("Por favor, insira o nome de uma cidade.");
      return;
    }

    cidade = cidade.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cidade = cidade.replace(/\s+/g, "+");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&lang=pt_br&units=metric&appid=2f50ed17d76c577bdc0c49895ed109ec`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("Cidade não encontrada. Por favor, tente novamente.");
      setDados(null);
      return;
    }

    setDados(data);
    console.log(data);
  }

  const inputRef = useRef(null);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-2xl p-10 w-11/12 max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
          Clima Tempo Real
        </h1>
        <span className="text-gray-500 mb-8">
          Consulte o clima em qualquer cidade do mundo
        </span>

        <div className="flex items-center justify-center gap-3 w-full mb-8">
          <InputClima inputRef={inputRef} />
          <Botao onClick={handleClick} />
        </div>

        <div className="mt-4">
          {!dados && (
            <span className="text-gray-500 text-lg">
              Digite o nome de uma cidade para começar
            </span>
          )}

          {dados && (
            <div className="text-center animate-fadeIn">
              <img
                src={`https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`}
                alt={dados.weather[0].description}
                className="mx-auto mb-2"
              />
              <h2 className="text-3xl font-semibold text-blue-700">
                {dados.name}
              </h2>
              <p className="text-xl text-gray-600">
                {dados.weather[0].description.charAt(0).toUpperCase() +
                  dados.weather[0].description.slice(1)}
              </p>
              <p className="text-5xl font-bold text-blue-800 mt-2">
                {Math.round(dados.main.temp)}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
