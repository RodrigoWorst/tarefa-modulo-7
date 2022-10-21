import './styles.css';
import CarCardImg from '../../assets/images/car-card-1.png';

const CarCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={CarCardImg} alt="Nome do produto" />
      </div>
      <div className="card-botton-container">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <button className="btn btn-secondary">COMPRAR</button>
      </div>
    </div>
  );
};

export default CarCard;
