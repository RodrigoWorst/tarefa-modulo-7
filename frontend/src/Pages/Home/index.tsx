import CarImg from '../../assets/images/car-header-1.png';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={CarImg} alt="Nome do produto" />
        </div>
      </div>
      <div className="base-card home-btn-container">
        <Link to="/cars">
          <button>VER CATÁLOGO</button>
        </Link>
        <h1>Começe agora a navegar</h1>
      </div>
    </div>
  );
};

export default Home;
