export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
  description?: string;
}

export interface FetchImage {
  results: Image[];
  total: number;
}

export interface AppState {
  images: Image[];
  error: string | null;
  loading: boolean;
  query: string;
  page: number;
  showModal: boolean;
  selectedImage: Image | null;
}

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  image: Image | null;
  onClose: () => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ErrorMessageProps {
  message: string;
}



// export interface Image {
//   id: string;
//   urls: {
//     small: string;
//     regular: string;
//   };
//   alt_description: string;
// }

// export interface FetchImage {
//   results: Image[];
//   total: number;
// }

// export interface ImageCardProps {
//   image: Image;
//   onClick: () => void;
// }

// export interface ImageGalleryProps {
//   images: Image[];
//   onClick: (image: Image) => void;
// }

// export interface ImageModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   image?: Image | null;
// }

// export interface LoadMoreBtnProps {
//   changeClick: () => void;
// }

// export interface SearchBarProps {
//   onSubmit: (query: string) => void;
// }



