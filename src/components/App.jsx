import {useState, useEffect} from 'react';
import SearchBar from '/src/components/SearchBar/SearchBar.jsx';
import ImageGallery from '/src/components/ImageGallery/ImageGallery.jsx';
import Loader from '/src/components/Loader/Loader.jsx';
import ErrorMessage from '/src/components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '/src/components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '/src/components/ImageModal/ImageModal.jsx';
import axios from 'axios';
import  toast, { Toaster} from 'react-hot-toast';

const ACCESS_KEY = 'L-Y2-EcS09YXUeoXZMRRNcADzgrqbXGXZaPf-DqZRtE';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

  const fetchAndDisplayImages = async () => {
    setImages([]);
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            query,
            page,
            per_page: 9,
          },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        }
      );
      if (response.status === 200) {
        if (response.data.results.length === 0) {
          setError('No images found for your query.');
        } else {
          setImages((prev) => [
            ...prev,
            ...response.data.results,
          ]);
        }
      } else {
          throw new Error('Error fetching images');
      }
    } catch {
      setError('Error loading images.');
      toast.error(
          'Unable to retrieve images. Please verify your connection or attempt again'
        );
    } finally {
      setLoading(false);
    }
  };
  fetchAndDisplayImages();
  }, [query, page]);  



  const handleSearch = async (searchQuery) => {
    if (query === searchQuery) return;
    setQuery(searchQuery);
    setPage(1);
};

  const loadMoreImages = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image) => {
  if (!showModal) { 
    setSelectedImage(image);
    setShowModal(true);
  }
};

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster reverseOrder={false} position='top-right' />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {showModal && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} isOpen={showModal} />
      )}
    </div>
  );
};

export default App;

