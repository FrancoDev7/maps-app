import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>(null);

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar lugar..."
        className="form-control"
        onChange={onQueryChanged}
      />
    </div>
  );
};
