const Search = ({ searchKey, handleChange }) => (
    <div className="input-search">
        <form>
        <input type="text" name={searchKey} onChange={handleChange}></input>
        </form>
    </div>
);

export default Search;