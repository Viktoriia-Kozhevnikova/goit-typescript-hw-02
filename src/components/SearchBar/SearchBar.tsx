import React, { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { SearchBarProps } from "../../types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <header className={s.title}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={s.input}
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className={s.btn}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;





// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import s from "../SearchBar/SearchBar.module.css";

// interface SearchBarProps {
//   onSubmit: (query: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
//   const [query, setQuery] = useState<string>("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!query.trim()) {
//       toast.error("Please enter a search query!");
//       return;
//     }
//     onSubmit(query);
//     setQuery("");
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <header className={s.title}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className={s.input}
//           placeholder="Search images and photos"
//           value={query}
//           onChange={handleInputChange}
//           autoComplete="off"
//           autoFocus
//         />
//         <button type="submit" className={s.btn}>Search</button>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;


