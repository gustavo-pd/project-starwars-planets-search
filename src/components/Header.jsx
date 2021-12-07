import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/Header.css';

export default function Header() {
  const { filters, setFilters } = useContext(AppContext);

  const { filterByName } = filters;

  const inputChange = (e) => {
    setFilters({
      ...filters,
      filterByName: {
        name: e.target.value,
      },
    });
  };

  return (
    <div>
      <header>
        <h1 className="title">StarWars Search Planets</h1>
        <form>
          <label htmlFor="searchInput">
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              value={ filterByName.name }
              onChange={ (e) => inputChange(e) }
              data-testid="name-filter"
              placeholder="enter a name of planet"
            />
          </label>
        </form>
      </header>
    </div>
  );
}
