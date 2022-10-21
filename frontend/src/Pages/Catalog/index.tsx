import Search from '../../Components/Search';
import CarCard from '../../Components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <Search />
        <div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
