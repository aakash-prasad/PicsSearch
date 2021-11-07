import "./SearchBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBox({imageSearchHandler, inputText, setInputText}){
    return(
        <>
            <form className="searchContainer" onSubmit={imageSearchHandler}>
                <input className="searchBox" placeholder="Enter the image to search!" value={inputText} onChange={(e)=>setInputText(e.target.value)}></input>
                <button type="submit" className="searchButton"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </>
    );
}

export default SearchBox;