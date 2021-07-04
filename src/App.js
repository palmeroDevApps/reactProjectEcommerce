import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const darBienvenida = () => {
    alert("Bienvenidos a nuestra tienda!! ");
  }

  return (
    <>
      <div className="App">
        <NavBar 
          nombreDeLaTienda="Multichoice" 
          darBienvenida = {darBienvenida}
        />
        <h1>Hola mundo</h1>
      </div>
    </>
  );
};

export default App;
