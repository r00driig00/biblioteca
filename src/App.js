import './App.css';
import { Cabecera } from './components/Cabecera/Cabecera';
import Libro from './components/Libro/Libro';
import { Pie } from './components/Pie/Pie';


function App() {
  return (
    <body  className="App-header">
            <Cabecera/>
              <Libro/>

            <Pie/>
    </body>

  );
}

export default App;
