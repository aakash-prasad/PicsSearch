import "./ImageGrid.css";

function ImageGrid({searchQuery, totalImages, images, loadMoreHandler}){
    return(
        <div className="imageContainer">
            {searchQuery!=="" &&
            <>
                <h2>{searchQuery}</h2>
                <p>{totalImages} images has been found</p>
                <div className="imageGrid">
                    {images.map(image => (
                      <img className="gridImages" src={image.urls.full} key={image.id}></img>
                    ))}
                </div>
                <button className="loadMoreBtn" onClick={loadMoreHandler}>Load more</button>
            </>
            }
        </div>
    );
}

export default ImageGrid;