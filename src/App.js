import './App.css';
import Menu from './components/Menu';
import Datos from './components/Datos';
import Estudios from './components/Estudios';
import Experiencia from './components/Experiencia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Datos/><br/><Estudios/><br/>
        <Experiencia></Experiencia>
      </header>
    </div>
  );
}

export default App;
