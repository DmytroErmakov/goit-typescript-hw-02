
import React, {ChangeEvent, FormEvent, useState} from "react";
import toast from "react-hot-toast"

import css from "../SearchBar/SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps ) {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
        if (query.trim() === "") {
            toast.error("Please enter a search term");
            return;
        }
        onSubmit(query);
        setQuery("");

    }
  
  return (
    <header>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};


