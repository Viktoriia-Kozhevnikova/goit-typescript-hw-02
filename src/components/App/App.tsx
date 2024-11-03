import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Image } from "../../types"; 

const ACCESS_KEY = "L-Y2-EcS09YXUeoXZMRRNcADzgrqbXGXZaPf-DqZRtE";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchAndDisplayImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            query,
            page,
            per_page: 9,
          },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });

        if (response.status === 200) {
          if (response.data.results.length === 0) {
            setError("No images found for your query.");
          } else {
            setImages((prev) => [...prev, ...response.data.results]);
          }
        } else {
          throw new Error("Error fetching images");
        }
      } catch {
        setError("Error loading images.");
        toast.error("Unable to retrieve images. Please verify your connection or attempt again");
      } finally {
        setLoading(false);
      }
    };

    fetchAndDisplayImages();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prev) => prev + 1);
  };

  const handleImageClick = (image: Image) => {
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
      <Toaster reverseOrder={false} position="top-right" />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
      {showModal && selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} isOpen={showModal} />
      )}
    </div>
  );
};

export default App;





// import React, { useState, useEffect } from "react";
// import SearchBar from "../SearchBar/SearchBar";
// import ImageGallery from '../ImageGallery/ImageGallery';
// import Loader from '../Loader/Loader';
// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
// import ImageModal from '../ImageModal/ImageModal';
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const ACCESS_KEY = "L-Y2-EcS09YXUeoXZMRRNcADzgrqbXGXZaPf-DqZRtE";


// interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
//   user: {
//     name: string;
//   };
//   likes: number;
//   description?: string;
// }


// interface AppState {
//   images: Image[];
//   error: string | null;
//   loading: boolean;
//   query: string;
//   page: number;
//   showModal: boolean;
//   selectedImage: Image | null;
// }

// const App: React.FC = () => {
//   const [images, setImages] = useState<Image[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [query, setQuery] = useState<string>("");
//   const [page, setPage] = useState<number>(1);
//   const [showModal, setShowModal] = useState<boolean>(false);
//   const [selectedImage, setSelectedImage] = useState<Image | null>(null);

//   useEffect(() => {
//     if (!query) return;

//     const fetchAndDisplayImages = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get("https://api.unsplash.com/search/photos", {
//           params: {
//             query,
//             page,
//             per_page: 9,
//           },
//           headers: {
//             Authorization: `Client-ID ${ACCESS_KEY}`,
//           },
//         });

//         if (response.status === 200) {
//           if (response.data.results.length === 0) {
//             setError("No images found for your query.");
//           } else {
//             setImages((prev) => [...prev, ...response.data.results]);
//           }
//         } else {
//           throw new Error("Error fetching images");
//         }
//       } catch {
//         setError("Error loading images.");
//         toast.error("Unable to retrieve images. Please verify your connection or attempt again");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAndDisplayImages();
//   }, [query, page]);

//   const handleSearch = (searchQuery: string) => {
//     if (searchQuery.trim() === "") {
//       toast.error("Please enter a search query!");
//       return;
//     }
//     setQuery(searchQuery);
//     setImages([]);
//     setPage(1);
//   };

//   const loadMoreImages = () => {
//     setPage((prev) => prev + 1);
//   };

//   const handleImageClick = (image: Image) => {
//     if (!showModal) {
//       setSelectedImage(image);
//       setShowModal(true);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleSearch} />
//       <Toaster reverseOrder={false} position="top-right" />
//       {error && <ErrorMessage message={error} />}
//       <ImageGallery images={images} onImageClick={handleImageClick} />
//       {loading && <Loader />}
//       {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} />}
//       {showModal && selectedImage && (
//         <ImageModal image={selectedImage} onClose={closeModal} isOpen={showModal} />
//       )}
//     </div>
//   );
// };

// export default App;


