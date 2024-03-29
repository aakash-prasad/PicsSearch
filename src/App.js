import './App.css';
import {useState} from "react";
import SearchBox from "./containers/SearchBox/SearchBox";
import ImageGrid from "./containers/ImageGrid/ImageGrid";

function App() {

  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [totalImages, setTotalImages] = useState(0);
  const [images, setImages] = useState([]);
  const [pageCounter, setPageCounter] = useState(1);

  const imageSearchHandler = (e)=>{
    e.preventDefault();
    setSearchQuery(inputText);
    fetch(`https://api.unsplash.com/search/photos?query=${inputText}&page=1`, {
      method: "GET",
      headers: {
        Authorization: "Client-ID V4z3DMh9fofpsixgRQ0R6kpw06hxDeHg4Jl8hdWr6Ac"
      }
    }).then(data=>data.json()).then(result=>{
      setTotalImages(result.total);
      setImages(result.results);
    })
  }

  const loadMoreHandler = ()=>{
    fetch(`https://api.unsplash.com/search/photos?query=${inputText}&page=${pageCounter+1}`, {
      method: "GET",
      headers: {
        Authorization: "Client-ID V4z3DMh9fofpsixgRQ0R6kpw06hxDeHg4Jl8hdWr6Ac"
      }
    }).then(data=>data.json()).then(result=>{
      setImages(images.concat(result.results));
      setPageCounter(pageCounter+1);
    });
  }

  return (
    <div className="container">
      <SearchBox imageSearchHandler={imageSearchHandler} inputText={inputText} setInputText={setInputText}></SearchBox>
      <ImageGrid searchQuery={searchQuery} totalImages={totalImages} images={images} loadMoreHandler={loadMoreHandler}></ImageGrid>
    </div>
  );
}

export default App;
