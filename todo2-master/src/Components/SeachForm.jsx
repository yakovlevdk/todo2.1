import { useState } from "react";
export const SearchForm = ({ todos, handleSearch, resetSearch }) => {
  const [search, setSearch] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch(search, todos);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Искать"
      />
      <button type="submit">Поиск</button>
      <button type="button" onClick={resetSearch}>
        Сбросить поиск
      </button>
    </form>
  );
};
