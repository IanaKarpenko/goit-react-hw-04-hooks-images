import { fetchImages } from './services/images-api'
import './App.css';
import { useEffect, useState } from 'react';
import { Searchbar } from './components/Searchbar';
import { ImageGallery } from './components/ImageGallery';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner';
import { Modal } from './components/Modal';

const App = () => {

  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const [imageForModal, setImageForModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImagess = () => {
    const options = { searchQuery, currentPage };
    setIsLoading(true);

    fetchImages(options)
      .then(newImages => {
        setImages(prevState => [...prevState, ...newImages]);
        setCurrentPage(prevPage => prevPage + 1);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (searchQuery !== '') {
      const options = { searchQuery, currentPage };
      setIsLoading(true);

      fetchImages(options)
        .then(newImages => {
          setImages(prevState => [...prevState, ...newImages]);
          setCurrentPage(prevPage => prevPage + 1);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [searchQuery]);

  const onChangeFilter = search => {
    setImages([]);
    setSearchQuery(search);
    setCurrentPage(1);
    setError(null);
  }

  const onimageClick = (evt) => {
    const targetImage = images.find(activeImage => (activeImage.id === Number(evt.currentTarget.id)));
    setImageForModal(targetImage.largeImageURL);
    setShowModal(true);
  }

  const handleBackClick = (evt) => {
    setImageForModal("");
    setShowModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        
          <Searchbar onSubmitt={onChangeFilter} />
          <ImageGallery images={images} imageClick={onimageClick} />
          {isLoading && <Spinner />}
          {images.length > 0 ? !(showModal) && <Button currentPage={currentPage} onSubmit={fetchImagess} /> : ''}
          {showModal && <Modal className='modal' image={imageForModal} click={handleBackClick} />}

      </header>
      </div>
    )
}


export default App;
