import './App.css';
import Datos from './components/Datos';
import Estudios from './components/Estudios';
import Experiencia from './components/Experiencia';
import react, {useState} from 'react';

function App() {

  const [page, setPage] = useState("data")

  return (
    <div className="App">
      <header className="App-header">
      <div className='main_Frame'>
        <button onClick={()=> setPage("data")} className='button'>
            Datos
        </button>
        <button onClick={()=> setPage("estudios")}className='button'>
            Datos academicos
        </button>
        <button onClick={()=> setPage("expe")} className='button'>
            Experiencia laboral
        </button>
    </div><p/>

    {page === "data" &&
    <Datos/>
    }
        {page === "estudios" &&
    <Estudios/>
    }
        {page === "expe" &&
    <Experiencia/>
    }
      </header>
    </div>
  );
}

export default App;
