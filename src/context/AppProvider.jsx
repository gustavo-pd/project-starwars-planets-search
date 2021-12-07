import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const NAMES_TR = [
  'Name',
  'Rotation Period',
  'Orbital Period',
  'Diameter',
  'Climate',
  'Gravity',
  'Terrain',
  'Surface Water',
  'Population',
  'Films',
  'Created',
  'Edited',
  'URL',
];

const INITIAL_FILTERS = {
  filterByName: {
    name: '',
  },
};

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState(data);
  const [tableHead] = useState(NAMES_TR);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  async function fetchPlanets() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
    const resolve = await fetch(URL);
    const response = await resolve.json();
    setData(response.results);
    setPlanets(response.results);
  }

  const filterPlaneByName = () => {
    const { filterByName } = filters;
    const filteredPlanets = data.filter(
      (planet) => planet.name.toLowerCase().includes(filterByName.name.toLowerCase()),
    );
    return setPlanets(filteredPlanets);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    filterPlaneByName();
  }, [filters]);

  const state = {
    tableHead,
    planets,
    filters,
    setFilters,
  };

  return (
    <AppContext.Provider value={ state }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
