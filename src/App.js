import logo from './logo.svg';
import tailwind from './tailw.png'
import './App.css';

function App() {
  return (
    <div>
      <header className= "bg-gray-800 h-screen">
        <div className="text-white flex flex-col">
          <h1 className="text-5xl align-center p-6">Obrigado rocketseat</h1>
          <p className="text-2xl pl-12">O DoWhile foi um evento de muito aprendizado e de muita interação com a comunidade, por isso estou aqui montando uma pequena implementação de agradecimento</p>
          <p className="text-2xl pl-12 leading-loose">Vou montar tudo o que conseguir no tempo que me é disponível, não sou muito bom com front, mas estou tentando.</p>
        </div>/
        <div className="p-6 flex items-center">
          <p className="text-white text-2xl leading-loose">Tecnologias usada:</p>
          <img src={logo} className="w-64"/>
          <h1 className="text-white text-5xl">+</h1>
          <img src={tailwind} className="p-2 w-32"/>
        </div>
      </header>
    </div>
  );
}

export default App;
