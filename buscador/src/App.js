import { LuHeart } from "react-icons/lu";
import './style.css';

function App() {
  return (
    <div className="container">
     <h1 className="title"> Buscador de CEP</h1>
     <div className="containerInput">
      <input type="text" placeholder="Digite aqui..."/>
      <button className="buttonSearch">
        <LuHeart size={25} color="red"/>
      </button>
     </div>
    </div>
  );
}

export default App;
