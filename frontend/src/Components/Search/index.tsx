import './styles.css';

const Search = () => {
    return(
        <div className="base-card search-container">
            <input type="text" placeholder="Digite sua busca"/>
            <button className="btn btn-secondary">BUSCAR</button>
        </div>
    );
}

export default Search;