import { useState } from 'react';
import toast from 'react-hot-toast';
import s from '../SearchBar/SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search query!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className={s.title}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className={s.input}
          placeholder='Search images and photos'
          value={query}
          onChange={handleInputChange}
          autoComplete='off'
          autoFocus
        />
        <button type='submit' className={s.btn}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
