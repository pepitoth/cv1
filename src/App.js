import './App.css';
import Menu from './components/Menu';
import Datos from './components/Datos';
import Estudios from './components/Estudios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/><br/>
        <Datos/><br/><Estudios/>
      </header>
    </div>
  );
}

export default App;
