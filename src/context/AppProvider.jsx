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

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [tableHead] = useState(NAMES_TR);

  async function fetchPlanets() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
    const data = await fetch(URL);
    const response = await data.json();
    setPlanets(response.results);
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const state = {
    planets,
    tableHead,
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
